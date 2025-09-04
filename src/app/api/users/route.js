import clientPromise from "../../../../lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db();

        const totalUsers = await db.collection("users").countDocuments();

        return Response.json({ totalUsers });
    } catch (error) {
        console.error("Error fetching user count:", error);
        return Response.json({ error: "Failed to fetch user count" }, { status: 500 });
    }
}