import { connectMongoDB } from "../../../../lib/mongoose";
import Review from "../../../../models/review";

export async function GET() {
    try {
        await connectMongoDB();

        const totalReviews = await Review.countDocuments();

        return Response.json({ totalReviews });
    } catch (error) {
        console.error("Error counting reviews:", error);
        return Response.json({ error: "Failed to count reviews" }, { status: 500 });
    }
}