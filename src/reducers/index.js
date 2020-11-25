const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                posts: action.payload
            };
        case 'POST_LIKED':
            return {
                posts: updateLiked(state.posts, action.payload)
            };
        case 'POST_ADDED':
            return {
                posts: addedNew(state.posts, action.payload)
            };
        default:
            return {
                posts: []
            };
    }
};

const updateLiked = (posts, id) => {
    const postIndex = posts.findIndex((post) => post.id === id);
    const newarr = [
        ...posts.slice(0, postIndex), 
        {...posts[postIndex], liked: !posts[postIndex].liked},
        ...posts.slice(postIndex + 1)
    ];
    return newarr
};

const addedNew = (all, post) => {
    const newPost = {
        id: getID(all),
        title: post.title,
        body: post.body,
        liked: false
    };
    return [newPost, ...all];
};

const getID = (posts) => {
    let maxID = posts.reduce((max, i) => Math.max(max, i.id), 0);
    return ++maxID;
};

export default reducer;