import React from 'react';
import './posts-list.css';
import PostItem from '../post-item/post-item';

const PostsList = ({posts, onStarClick}) => {
    const allPosts = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <PostItem 
                {...itemProps}
                onStarClick={() => onStarClick(id)}/>
            </li>
        )
    });

    return (
        <ul className="posts-list">
            {allPosts}
        </ul>
    )

}

export default PostsList;