import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongoose";
import GPA from "../../../../models/gpa";

export async function POST(request) {
    try {
        const { userID } = await request.json();

        await connectMongoDB();

        const userData = await GPA.findOne({ userID });
        if (!userData) {
            return NextResponse.json({ message: "User data not found." }, { status: 404 });
        }

        const features = userData.features;

        const res = await fetch("http://127.0.0.1:8000/api/models/?model_index=2", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ features }),
        });

        const data = await res.json();
        const predictedGPA = data.prediction;

        return NextResponse.json({ predictedGPA });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error predicting GPA." }, { status: 500 });
    }
}