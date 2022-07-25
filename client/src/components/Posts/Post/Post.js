import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
// import icon from material=ui
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";
const Post = ({ post, setCurrentId }) => { // get post from props
    const classes = useStyles();
    
    return (
        // {post.creator} we're getting all data from the Card
        // {moment(post.createdAt).fromNow()} this one is going to be about when the post was created we can use that moment's library installed at the beginning
        // .fromNow() - basically says for example, five minutes ago five seconds ago so on
        // Button include the icon <MoreHorizIcon fontSize="default" />
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: "white" }} size="small" onClick={() => { }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
        // {post.tags.map((tag) => `#${tag}`)} In there we're going to loop over our tags and add the hashtag before them
        // for each tag we want to do something and that something is returned a string where each string is going to start with a hashtag sign
        // gutterBottom
    );
}

export default Post;