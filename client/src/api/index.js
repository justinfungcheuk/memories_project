import axios from "axios";

const url = "http://localhost:3000/posts";

// axios.get() call url - localhost:3000/posts simply returns all the posts that we currently have in the database 
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); // after we get the post we can set the axios.post(), in this case we are sending is going to be the whole newPost - exporting this we can go back to actions file -> posts.js - export const createPost
// we make a post request we are going to be able to add a newPost into our database connected to our server 
// so we need to add the api request and the action for the post request first from - api file -> index.js

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// arrow function with an instantaneous return 
// axios.patch(`${url}/${id}`, updatedPost); represent which url will be making that request 
// /${id} represent that we have the id specified because we need to know what post do we want to update
// second parameter updatedPost - we are sending over the updatedPost