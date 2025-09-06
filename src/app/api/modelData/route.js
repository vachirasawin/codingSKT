import GPA from "../../../../models/gpa";
import { connectMongoDB } from "../../../../lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const userID = searchParams.get("userID");

    try {
        await connectMongoDB();

        const existing = await GPA.findOne({ userID });
        if (existing) {
            return NextResponse.json(existing, { status: 200 });
        } else {
            return NextResponse.json(null, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Error fetching data." }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { userID, dataset, features, gpa } = await request.json();

        await connectMongoDB();

        const existing = await GPA.findOne({ userID });
        if (existing) {
            existing.dataset = dataset;
            existing.features = features;
            existing.gpa = gpa;
            await existing.save();
            return NextResponse.json({ message: "Data updated." }, { status: 200 });
        }

        await GPA.create({ userID, dataset, features, gpa });

        return NextResponse.json({ message: "Data created." }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured while created the data." }, { status: 500 });
    }
}
