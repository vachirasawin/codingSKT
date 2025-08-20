import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
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
        async jwt({ token, user }) {
            if (user) {
                token.id = user._id;
                token.firstName = user.firstName || null;
                token.lastName = user.lastName || null;
                token.username = user.username || null;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.firstName = token.firstName;
            session.user.lastName = token.lastName;
            session.user.username = token.username;
            session.user.email = token.email;
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