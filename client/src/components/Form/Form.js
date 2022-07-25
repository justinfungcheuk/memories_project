import React, { useState, useEffect } from "react";
// Part1: 57:44
// we have empty array because that's what we set up right there in the reducer  
// but later on once we make a request then we get the new empty array and that's after the data has been fetched 
// the data has been successfully fetched - but still it's an empty array that means the get request works 
// then to implement the form so that we can make a post request to our database and add new posts
// start by adding the jsx to our form - first of all we have to import all the components we're going to use 
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts.js"

// GET THE CURRENT ID

// paper is like a div
const Form = ({ currentId, setCurrentId }) => { // accept these props in here and destructure and use them
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null); // In this case, we don't want all the posts, only want the data for the updated post 
    // state.posts.find((p) => p_.id === currentId) : null - this is going to make sure that we find only that specific post, if we don't have the currentId though in that case we just want to have null
    // we're not returning posts here it's simply going to be post because the find method is returning one singular thing 
    const classes = useStyles();
    const dispatch = useDispatch(); // allows us to actually dispath actions the question is where do we want to dispatch it

    // on the handleSubmit once the user submits we want to send over a post request with all the data that user typed in 
    // fist of all we always have to say event that prevent default not to get the refresh in the browser
    const handleSubmit = (e) => { // we have to specify here event
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            // dispatch an action so dispatch this time is going to be createPost and inside of there we're going to pass all the data from our state postData
            dispatch(createPost(postData)); // if we don't have a currently selected id that must mean we are creating a post and not updating it
        } // handleSubmit are making that request once we click the submit button
        // once the action is dispatched then we go to reducers file -> posts.js - case: "CREATE" we have to send over an array - due to we have an array of posts - return [...posts, action.payload];
    }
    const clear = () => {

    }

    return ( // classes.root actually provide that padding and margin
        // <Paper className={classes.paper}>
        //     <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        //         <Typography variant="h6">Creating a Memory</Typography>
        //         <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        //         <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        //         <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        //         <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        //         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        //         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullwidth>Submit</Button>
        //         <Button variant="contained" color="secondary" size="small" onClick={clear} fullwidth>Clear</Button>
        //     </form>
        // </Paper>
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    );
    // we can see we have so many props above the TextField but usually if we don't have this we would have to have over 100 lines of css for that nice looking button wit material ui
    // so here we just pass props  
};

export default Form;


/* <TextField
name="creator"
variant="outlined"
label="Creator"
fullWidth
value={postData.creator}
// value={postData.creator} that means the whole data from our post is going to be stored in the postData object in the state
// each object key is going to be a specific text field - so let's create that state using the useState property - import React, { useState} from "react";

onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
// onChange={(e) => setPostData({ ...postData, creator: e.target.value })} - In every TextField if we do the same thing but only change the last property that means all the data is going to persist while changing only the specific property of that specific TextField /> */
