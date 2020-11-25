import React from 'react';
import PostsList from '../posts-list';
import './favourites.css';


const Favourites = ({num}) => {
    return (
        <div className="favourites">
                <h2 className="title">Favourite ({num})</h2>
                <ul className="favourites-list">
                    <PostsList>
                        {(posts) => (posts.filter(item => item.liked === true))}
                    </PostsList>
                </ul>
            </div>
    );
};

export default Favourites;