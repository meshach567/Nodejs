// Import necessary modules
import mongoose, { Schema } from "mongoose";
// Create a schema for the User model
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });
// Create and export the User model
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map