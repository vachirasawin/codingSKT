import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST(request) {
    try {
        await connectMongoDB();
        const { email } = await request.json();
        const userEmail = await User.findOne({ email }).select("_id");

        return NextResponse.json({ userEmail });
    } catch (error) {
        console.log(error)
    }
}