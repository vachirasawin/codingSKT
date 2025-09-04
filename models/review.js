import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema (
    {
        review: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "/profile.png",
        },
        typeInfo: {
            type: String,
            required: true
        }
    }, { timestamps: true, collection: "reviews" } 
)

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema, "reviews");
export default Review;