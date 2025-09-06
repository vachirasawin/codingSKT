import mongoose, { Schema } from "mongoose";

const gpaSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            required: true
        },
        dataset: {
            type: Array,
            required: true
        },
        features: {
            type: Array,
            required: true
        },
        gpa: {
            type: Array,
            required: true
        },
    }, { timestamps: true } 
)

const GPA = mongoose.models.GPA || mongoose.model("GPA", gpaSchema);
export default GPA;