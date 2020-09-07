import React from 'react';
import './app.css';
import PostsList from '../posts-list/posts-list';
import Favourites from '../favourites/favourites';
import PostAddForm from '../post-add-form/post-add-form.js';

const App = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="wrapper">
                    <div className="column column_left">
                        <div className="all">
                            <h2 className="title">All</h2>
                            <PostsList/>
                        </div>
                    </div>
                    <div className="column column_right">
                        <div className="post-new">
                            <h2 className="title">Add New</h2>
                            <PostAddForm />
                        </div>
                        <div className="favourites">
                            <h2 className="title">Favourites</h2>
                            <Favourites />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;