import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts ) // return state.posts // here we already know how to fetch some data from redux - inside of here we are fetching the post
    // as a parameter in that callback function we get access to that whole global redux store or state
    // How do we know that it is called posts - reducers file -> index.js - we have posts 

    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress /> : (// if not posts that length then show CircularProgress and that CircularProgress is just a loading spinner
            // if there is no post that length then return <CircularProgress />, otherwise return (<Grid></Grid>)
            // That means if posts length is 0 then show <CircularProgress />, otherwise for example, posts.length is 5,  show (<Grid></Grid>)
            // : represent else 
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    // loop over the posts, posts that map, in a map we get a post and then for each post we're gonna immediately return something
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}
                            // setCurrentId={setCurrentId called props drilling we are basically continuing sending the same props over over and over again to the most child component
                            // and that's the exact problem that redux solves 
                            // So we have setCurrentId we can know in the Post and we are going to receive that setCurrentId from Post File -> Post.js line9 
                        /> 
                    </Grid>
                    // as props in the post we'll be sending this post that's it as we are mapping with our real posts now, 
                    // not generic ones we can send that individual value of a post - post={ post }, to each post component
                    // Done above flow, then we can go to a singular post component and implement the logic in Post file -> Post File -> Post.js - import some we need below:
                    // import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
                    // import icon from material=ui
                    // import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
                    // import DeleteIcon from "@material-ui/icons/Delete";
                    // import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
                ))}
            </Grid>
        )
    );
}

export default Posts;

// Part1: 55:25
// To somehow fetch the data from that global redux store
// we can do that with the help of something known as selectors
// so in there we're going to import  { use Selector}