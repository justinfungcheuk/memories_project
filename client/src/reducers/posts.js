export default (posts = [], action) => {
    // const reducers = (state = [], action) => {
    // the state always need to be equal to something we cannont have it equal to nothing
    // that's why we have to set this initial value
    // our posts are going to be an array and that's why we are specifying this empty array there

    // our state is always going to be simply posts because we are in a posts reducer so we can rename the state to posts 
    switch (action.type) {
        case "UPDATE":
            // ternary expression - post.id === action.payload._id ? action.payload : post
            return posts.map((post) => post.id === action.payload._id ? action.payload : post) // keep in mind that action.payload is the updated post
        // post.id === action.payload._id ? action.payload - Why? Because that action.payload is the newly updated post or memory
        // otherwise we want to return just the post as it was without any updates 
        
        // Do you know what is the output of any map for that matther?
        // When we have array.map What is the output of a map method? It's an array we'll be mapping over the posts array we'll be changing something in there and then we'll be returning the changed array 
        
        // FETCH_ALL action for fetching all the posts 
        case "FETCH_ALL":
            return action.payload; // action.payload are our actual posts now 
        case "CREATE":
            return [ ...posts, action.payload];
        default:
            return posts;
        // now we just need to set it up so it works together once we connect the redux to the store 
    }
}

// Part1: 57:44
// we have empty array because that's what we set up right there in the reducer  
// but later on once we make a request then we get the new empty array and that's after the data has been fetched 
// the data has been successfully fetched - but still it's an empty array that means the get request works 
// then to implement the form so that we can make a post request to our database and add new posts
// start by adding the jsx to our form - first of all we have to import all the components we're going to use 