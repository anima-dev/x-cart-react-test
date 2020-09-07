import React from 'react';
import './posts-list.css';
import PostItem from '../post-item/post-item';

const PostsList = () => {
    return (
        <ul className="posts-list">
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </ul>
    )

}

export default PostsList;