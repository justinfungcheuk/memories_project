import express from "express";

import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

// localhost:3000/posts
router.get("/", getPosts);
// once we go to the route - / we're gonna run the create post function
router.post("/", createPost);
// patch() is used for updating existing documents 
router.patch("/:id", updatePost);
// for the reason we need to know the id before we want to edit something 
// so for the editing we need the id for the creation we don't because we're gonna just add a new id 
// but for the updating we need to know the id of the existing post 


export default router;