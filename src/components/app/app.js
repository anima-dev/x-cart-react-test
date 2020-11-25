import React from 'react';
import './app.css';
import AllPostsList from '../all-posts-list';
import Favourites from '../favourites';
import {connect} from 'react-redux';
import PostAddForm from '../post-add-form/post-add-form.js';

const App = ({posts}) => {
    return (
        <div className="main">
            <div className="container">
                <div className="wrapper">
                    <div className="column column_left">
                        <AllPostsList num={posts.length}/>
                    </div>
                    <div className="column column_right">
                        <PostAddForm  />
                        <Favourites num={posts.filter(item => item.liked === true).length} />
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({posts}) => ({posts});

export default connect(mapStateToProps)(App)

