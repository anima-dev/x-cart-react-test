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
        <div className="favourites">
            <h2 className="title">Favourites ({posts.filter((post) => post.liked).length})</h2>
                <ul className="posts-list">
                    {allPosts}
                </ul>
        </div>
        
    )
}

export default Favourites;