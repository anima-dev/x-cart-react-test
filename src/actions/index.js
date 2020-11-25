export const postsLoaded = (posts) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: posts
    };
};

export const postLiked = (id) => {
    return {
        type: 'POST_LIKED',
        payload: id
    };
};

export const onPostAdd = (post) => {
    return {
        type: 'POST_ADDED',
        payload: post
    }
};