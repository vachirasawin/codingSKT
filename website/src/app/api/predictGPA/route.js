import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { features } = await request.json();
        const predictedGPA 

        return NextResponse.json({ predictedGPA });
    } catch (error) {
        return NextResponse.json({ message: "Error predicting GPA" }, { status: 500 });
    }
}