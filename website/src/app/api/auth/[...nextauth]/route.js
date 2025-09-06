import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongoose";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../../lib/mongodb";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    events: {
        async createUser({ user }) {
            await connectMongoDB();

            if (!user.password) {
                const [firstName, ...lastNameParts] = user.name ? user.name.split(" ") : ["", ""];
                const lastName = lastNameParts.join(" ") || "";

                await User.findByIdAndUpdate(user.id, {
                    firstName: firstName || null,
                    lastName: lastName || null,
                    email: user.email,
                    password: "",
                    typeInfo: "registration",
                    profileImageUrl: user.image || "/profile.png",
                });
            }
        }
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials, request) {
                const { email, password } = credentials;

                try {
                    await connectMongoDB();

                    const user = await User.findOne({ email });

                    if (!user) {
                        return null;
                    }

                    const passswordMatch = await bcrypt.compare(password, user.password);

                    if (!passswordMatch) {
                        return null;
                    }

                    return user;
                } catch(error) {
                    console.log(error)
                }
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account?.provider === "credentials") {
                token.id = user._id;
                token.firstName = user.firstName || null;
                token.lastName = user.lastName || null;
                token.email = user.email;
                token.picture = user.profileImageUrl || null;
            } else if (account?.provider === "google" || account?.provider === "github" || account?.provider === "facebook") {
                token.id = user.id;
                token.email = user.email;

                if (user?.name) {
                    const [firstName, ...lastNameParts] = user.name.split(" ");
                    token.firstName = firstName || null;
                    token.lastName = lastNameParts.join(" ") || null;
                }

                if (account?.provider === "google" && user?.image) {
                    token.picture = user.image.replace("=s96-c", "=s512-c");
                } else if (account?.provider === "github" && user?.image) {
                    token.picture = `${user.image}&s=512`;
                } else if (account?.provider === "facebook" && user?.image) {
                    token.picture = `https://graph.facebook.com/${account.id}/picture?type=large&width=512&height=512`;
                }
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.firstName = token.firstName || null;
            session.user.lastName = token.lastName || null;

            session.user.name = token.name || null;
            session.user.email = token.email || null;
            session.user.image = token.picture || null;

            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin"
    },
    debug: process.env.NODE_ENV === "development"
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
