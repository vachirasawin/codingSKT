import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongoose";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        const { firstName, lastName, email, password, typeInfo } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({ firstName, lastName, email, password: hashedPassword, typeInfo });

        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured while registrating the user." }, { status: 500 });
    }
}