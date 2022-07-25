import * as api from "../api"
// import * means that we import everything from the actions as api that means we'll able to use this fetch posts 

// Action Creators
export const getPosts = () => async(dispatch) => {
    try {
        // In the try, we are going to try to fetch all the data from the api - fetching all of our posts
        // destructure the data { data }
        const { data } = await api.fetchPosts(); // fetching all of our posts from the api and then sending that data through the action.payload

        dispatch({ type: "FETCH_ALL", payload: data }); // sending that data through the action.payload
        // payload is usually the data where we store all of our post
    } catch (error) {
        console.log(error.message);
    }

    // const action = { type: "FETCH_ALL", payload: data }
    // payload is usually the data where we store all of our post
}

// we have to dispatch that action to do that we can go into the form - Form file -> Form.js - we can import that use dispatch from react redux  
export const createPost = (post) => async (dispatch) => { // In here we have the post and the post we're receiving it
    // arrow function with a dispatch that comes from redux tank and finally we're going to do a try catch block
    try {
        // destructure the data from the response and that is equal to await api.createPost
        const { data } = await api.createPost(post); // this is basically making an api request to our backend server and we are sending a post right there
        dispatch({ type: "CREATE", payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        // Inside of the try we're going to be making that api request to update the post
        const { data } = await api.updatePost(id, post);
        // What is this api request returning? - await api.updatePost(id, post); 
        // It's returning the updatd memory or the post so we can get the response
        // but not only the response we can destructure the response and immediately get the { data }

        // once we have the data for the updatedPost - we can call below dispatch()
        dispatch({ type: "UPDATE", payload: data })
        // if you've been working with redux for sometime then you know that it's usually a good idea to have action types - type: "UPDATE" - set as constants and then to import themin these files
    } catch (error) {
        console.log(error.message);
    }
}