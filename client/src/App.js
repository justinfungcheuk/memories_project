import React, { useState, useEffect } from "react";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import { getPosts } from "./actions/posts.js"
import Posts from "./components/Posts/Posts.js"
import Form from "./components/Form/Form.js"
import memories from "./images/memories.png"
import useStyles from "./styles";
import { useDispatch } from "react-redux";

// Typography - material-ui basically stands for any textual element(文字元素) like h2/paragraphs
// Grow - provides some simple animation
const App = () => {
    const [currentId, setCurrentId] = useState(null); // useState(null) set the id to be null at the start due to we don't have the id selected
    const classes = useStyles();
    const dispatch = useDispatch();
    // dispatch is a hook 
    // access to dispatch we need to find a way where we are actually going to dispatch the action
    // the best way to do that is inside of the useEffect
    // useEffect is initially going to be just the component that mount
    // later on it's going to become the component will update

    // successful dispatch
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} /** why are we doing this? we want to show how data management would look like without redux */ /> 
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;