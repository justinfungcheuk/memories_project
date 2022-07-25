// posts.js - inside of there we are going to create all the handlers for our routes

import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

// we're going to declare that function for the router.get inside the routes-posts.js file
export const getPosts = async (req, res) => {
    // because PostMessage that find or finding something inside of a model takes time which means that is an asynchronous(異步操作) action
    // for that reason we have to add awit in front of PostMessage.find()
    // Therefore we have to make this function asynchronous
    try {
    // the code in tru is going to happen if everthing is successful
        // here we try to retrieve all the posts that we currently have in the database
        const postMessages = await PostMessage.find()
    
        // make function return soemthing
        res.status(200).json(postMessages); // if everthing works res.status(200)
        // return json which is going to simply be an array of all messages that we have 


    } catch (error) {
    // the code in the catch is gonna happen if we get an error right there 
        // respond with something if there is an error 
        res.stauts(404).json({ message: error.message })
    }
    
}

// create post function 
export const createPost = async (req, res) => {
    // with post request we have access to something known as a request.body
    const post = req.body;
    // create new post
    const newPost = new PostMessage(post);
    // new PostMessage(post); pass the post values that we're receiving to the request.body

    // asynchronous action
    try {
        await newPost.save()

        // https://www.restapitutorial.com/httpstatuscodes.html
        // learn more about http codes by above link

        // Generally all requests that start with 200 are successful
        // 300 are redirections
        // 400 are client errors 
        // 500 are server errors
        res.status(201).json(newPost);
        // 201 means successful creation
        // json - we're just going to send that newPost in
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}

export const updatePost = async (req, res) => { // updatePost - for the update route and the controller 
    const { id: _id } = req.params
    // how do we know we are going to receive { id } - from routes file -> posts.js, we set the router.patch("/:id", updatePost)
    // that means finally once we make a request - the request is going to made to /posts/123 that 123 is immediately going to fill the value of { id }
    // while using object destructuring we can also rename our properties
    // In this case we're going to have to rename our id to _id -> { id: _id }

    const post = request.body // request.body it going to be sent from the front end 

    // check to see if this _id is really a mongoose object id
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

    // If the id is valid then we can update our post
    // to do that we're going to call our model which is the PostMessage
    const updatePost = await PostMessage.findByIdAndUpdate(_id, post, { new: true }) // we have access to the updatedPost and it's going to be updated in the database  
    // as the second parameter or the argument we have to pass the whole updated post
    // But where are we receiving the data for the updates, we are receiveing it from the request that body - const post = request.body
    // { new: true } so that we can actually receive the updated version of that post

    // send over that updatedPost
    res.json(updatePost);
}