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
        this.onStarClick = this.onStarClick.bind(this);
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
        })
    }

    onStarClick(id) {
        this.setState(({data}) => {
            const postIndex = data.findIndex((post) => post.id === id);
            const toggledPost = Object.assign({}, data[postIndex], { liked: !data[postIndex].liked});
            const newArr = [...data.slice(0, postIndex), toggledPost, ...data.slice(postIndex + 1)];
            
            return {
                data: newArr
            }

        });
    }



    
    

    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="wrapper">
                        <div className="column column_left">
                            <div className="all">
                                <h2 className="title">All</h2>
                                <PostsList 
                                posts={this.state.data}
                                onStarClick={this.onStarClick}/>
                            </div>
                        </div>
                        <div className="column column_right">
                            <div className="post-new">
                                <h2 className="title">Add New</h2>
                                <PostAddForm />
                            </div>
                            <div className="favourites">
                                <h2 className="title">Favourites</h2>
                                <Favourites 
                                onStarClick={this.onStarClick} 
                                posts={this.state.data}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

