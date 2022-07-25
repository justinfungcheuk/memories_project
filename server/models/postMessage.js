import mongoose from "mongoose";

// what is schema with mongodb ?
// we can create documents that look absolutely different 
// one can have title and the message so on
// mongoose allows us to give some sort of uniformity to our documents

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    // convert an image into a string using base64
    selectedFile: String,
    // an object and then inside type is equal to a number
    // because we have to add addtional information and that additional information is that by default we want to set it to 0
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// turn schema into a model
const PostMessage = mongoose.model("PostMessage", postSchema);

// exporting a mongoose model from the PostMessage file
export default PostMessage;
// on that model we will be able to run commands such as find/create/delete/update