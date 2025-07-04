import mongoose from 'mongoose';

const shortUrlSchema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true,
    },
    short_url: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model

    }
});

const shortUrl = mongoose.model('shortUrl', shortUrlSchema);
export default shortUrl;