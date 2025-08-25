import mongoose, { Schema } from "mongoose";

const userSchema = new Schema (
    {
        firstName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        typeInfo: {
            type: String,
            required: true
        },
        profileImageUrl: {
            type: String,
            default: "/profile.png",
        },
    }, { timestamps: true } 
)

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;