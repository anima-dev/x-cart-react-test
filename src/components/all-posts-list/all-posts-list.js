import React from 'react';
import PostsList from '../posts-list';
import './all-posts-list.css';

const AllPostsList = ({num}) => {
    return (
        <div className="all">
            <h2 className="title">All ({num})</h2>
            <ul className="all-posts-list">
                <PostsList>
                    {(posts) => (posts)}
                </PostsList>
            </ul>
        </div>
    );
};

export default AllPostsList;