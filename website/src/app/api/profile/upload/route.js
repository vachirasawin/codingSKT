import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import User from "../../../../../models/user";
import { connectMongoDB } from "../../../../../lib/mongodb";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get("image");
        const userId = formData.get("userId");

        if (!file || !userId) {
        return NextResponse.json({ message: "Missing file or userId" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const result = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "profiles" },
                (error, result) => {
                if (error) reject(error);
                else resolve(result);
                }
            );
            stream.end(buffer);
        });

        await connectMongoDB();
        const user = await User.findByIdAndUpdate(
            userId,
            { profileImageUrl: result.secure_url },
            { new: true }
        );

        return NextResponse.json({ message: "Uploaded successfully", user });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}