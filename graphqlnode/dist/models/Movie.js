// Import necessary modules
import mongoose, { Schema } from "mongoose";
// Create a schema for the User model
const movieSchema = new Schema({
    title: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true },
    duration: { type: String, required: true },
}, { timestamps: true });
// Create and export the User model
export default mongoose.model("Movie", movieSchema);
//# sourceMappingURL=Movie.js.map