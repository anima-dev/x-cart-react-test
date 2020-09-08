import React from 'react';
import PostItem from '../post-item/post-item';

const Favourites = ({posts, onStarClick}) => {
    const allPosts = posts.filter(item => item.liked === true).map(item => {
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

export default Favourites;