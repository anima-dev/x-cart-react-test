import React, {Component} from 'react';
import './post-add-form.css';
import {connect} from 'react-redux';
import {onPostAdd} from '../../actions';

class PostAddForm extends Component {
        state = {
            title: '',
            text: ''
        };

    onInput = (e) => {
        const maxChar = e.target.name === "title" ? 20 : 120;
        if (e.target.value.length > maxChar) {
            e.target.value = e.target.value.slice(0, maxChar);
        }
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const body = this.state.text;

        if (title === '' || body === '') {
            alert('Please fill in both fields');
            return;
        }

        this.props.onPostAdd({title, body});

        this.setState({
            title: '',
            text: '' 
        });
    };

    render() {
        return (
            <div className="post-new">
                <h2 className="title">Add New</h2>
                <form 
            className="form__form"
            onSubmit={this.onFormSubmit}>
                <label className="form__label">
                    Title:
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="What's the post about?"
                        className="form__input"
                        onInput={this.onInput}
                        onChange={this.handleChange}
                        value={this.state.title} />
                </label>            
                <label className="form__label">
                    Text:
                    <input 
                    type="text" 
                    name="text"
                    placeholder="Share your thoughts"
                    className="form__input"
                    onInput={this.onInput}
                    onChange={this.handleChange}
                    value={this.state.text} />
                </label>
                <button
                    type="submit"
                    className="form__button">
                    submit
                </button>
            </form>
            </div>
        );
    };
};

const mapDispatchToProps = {
    onPostAdd
};

export default connect(null, mapDispatchToProps)(PostAddForm);
