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
        <div className="all">
            <h2 className="title">All ({posts.length})</h2>
            <ul className="posts-list">
                {allPosts}
            </ul>
        </div>
        
    )

}

export default PostsList;