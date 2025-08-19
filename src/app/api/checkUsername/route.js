import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST(request) {
    try {
        await connectMongoDB();
        const { username } = await request.json();
        const userUsername = await User.findOne({ username }).select("_id");

        return NextResponse.json({ userUsername });
    } catch (error) {
        console.log(error)
    }
}