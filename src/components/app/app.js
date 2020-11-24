import React, {Component} from 'react';
import './app.css';
import PostsList from '../posts-list/posts-list';
import Favourites from '../favourites/favourites';
import PostAddForm from '../post-add-form/post-add-form.js';
import getPosts from '../../services';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.maxId = 0;
        this.onStarClick = this.onStarClick.bind(this);
        this.onAddPost = this.onAddPost.bind(this);
    }

    componentDidMount() {
        getPosts()
            .then(posts => {
                this.setState({
                    data: posts
                })
            });
    }

    getMaxId() {
        const idArr = [];
        this.state.data.forEach(item => {
            idArr.push(+item.id);
        })
        const maxid = Math.max(...idArr);
        this.maxId = maxid;
    }

    onStarClick(id) {
        this.setState(({data}) => {
            const postIndex = data.findIndex((post) => post.id === id);
            const updatedPost = {...data[postIndex], liked: !data[postIndex].liked};
            const newArr = [...data.slice(0, postIndex), updatedPost, ...data.slice(postIndex + 1)];
            
            return {
                data: newArr
            }

        });
    }

    onAddPost(title, body) {
        const newPost = {
            id: ++this.maxId,
            title,
            body,
            liked: false
        }
        this.setState(({data}) => {
            const newArr = [newPost, ...data];
            return {
                data: newArr
            }
        });
    }

    render() {
        const posts = this.state.data;

        return (
            <div className="main">
                <div className="container">
                    <div className="wrapper">
                        <div className="column column_left">
                            <PostsList 
                            posts={posts}
                            onStarClick={this.onStarClick}/>
                        </div>
                        <div className="column column_right">
                            <PostAddForm 
                            onAdd={this.onAddPost} />
                            <Favourites 
                            onStarClick={this.onStarClick} 
                            posts={posts}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

