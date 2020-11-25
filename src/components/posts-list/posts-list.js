import React, {Component} from 'react';
import PostItem from '../post-item/post-item';
import {postsLoaded, postLiked} from '../../actions';
import { connect } from 'react-redux';
import getPosts from '../../services';

class PostsList extends Component {

    componentDidMount() {
        getPosts()
            .then((posts) => {this.props.postsLoaded(posts)})
    };

    render() {
        const {posts, postLiked} = this.props;
        const allPosts = this.props.children(posts);
        const postsList = allPosts.map(item => {
            const {id, ...itemProps} = item;
            return (
                <li key={id}>
                    <PostItem 
                    {...itemProps}
                    postLiked={() => postLiked(id)}/>
                </li>
            );
        });
    
        return (<>{postsList}</>);
    };

};

const mapStateToProps = ({posts}) => ({
    posts
});

const mapDispatchToProps = {
    postsLoaded,
    postLiked
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);