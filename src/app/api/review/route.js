import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongoose";
import Review from "../../../../models/review";

export async function POST(request) {
    try {
        const { review, name, image, typeInfo } = await request.json();
        
        await connectMongoDB();
        await Review.create({ review, name, image, typeInfo });

        return NextResponse.json({ message: "User Reviewed." }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "An error occured while reviewing." }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        
        const reviews = await Review.find({ typeInfo: "review" }).sort({ createdAt: -1 });

        return NextResponse.json(reviews, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    await connectMongoDB();
    const { id } = await request.json();

    if (!id) {
        return NextResponse.json({ message: "ID required" }, { status: 400 });
    }
    
    await Review.findByIdAndDelete(id);

    return NextResponse.json({ message: "Review deleted" }, { status: 200 });
}