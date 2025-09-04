import mongoose, { Schema } from "mongoose";

const viewSchema = new Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        count: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export default mongoose.models.View || mongoose.model("View", viewSchema);