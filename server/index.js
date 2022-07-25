import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js"

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}))
// 30 megabytes - sending some images which can be large in size
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
// setting up bodyParser can properly send our requests
app.use(cors());
// cors module can receive all cross-domain request

// app.use(cors()); above the app.use routes - due to we added the proxy that have some bug
app.use("/posts", postRoutes);
// every route inside of the post routes is going to start with posts that means this route inside of posts is not reached by going to localhost
// it's reached by going to localhost:5000/posts
// because we added a prefix of posts to all routes in here(posts.js)


// https://www.mongodb.com/cloud/atlas
// host our database on their cloud we can go
const CONNECTION_URL = "mongodb+srv://justinfungcheuk:justin520@cluster0.lwhe3iu.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// accepts two different parameters: 
// first one: connection url, second one: object with all the options
// set them up we're gonna get some errors in the console or warnings
.then(() => {
    app.listen(PORT, () =>
        console.log(`Sever running on port: ${PORT}`))
})
.catch ((error) => {
    console.log(error.message)
})


// this again makes sure that we don't get any warnings in the console