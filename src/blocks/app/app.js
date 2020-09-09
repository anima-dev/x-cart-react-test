import React, {Component} from 'react';
import './app.css';
import PostsList from '../posts-list/posts-list';
import Favourites from '../favourites/favourites';
import PostAddForm from '../post-add-form/post-add-form.js';

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
        this.getPosts();
    }

    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            const posts = json.slice(0, 20).map(({id, title, body}) => {
                return ({
                    id,
                    title,
                    body,
                    liked: false
                })
            });

            this.setState(({data}) => {
                return {
                    data: posts
                }
            });

            this.getMaxId();
        })
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
        const all = posts.length;
        const liked = posts.filter((post) => post.liked).length;

        return (
            <div className="main">
                <div className="container">
                    <div className="wrapper">
                        <div className="column column_left">
                            <div className="all">
                                <h2 className="title">All ({all})</h2>
                                <PostsList 
                                posts={posts}
                                onStarClick={this.onStarClick}/>
                            </div>
                        </div>
                        <div className="column column_right">
                            <div className="post-new">
                                <h2 className="title">Add New</h2>
                                <PostAddForm
                                onAdd={this.onAddPost} />
                            </div>
                            <div className="favourites">
                                <h2 className="title">Favourites ({liked})</h2>
                                <Favourites 
                                onStarClick={this.onStarClick} 
                                posts={posts}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

