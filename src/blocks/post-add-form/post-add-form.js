import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInput(e) {
        const maxChar = e.target.name === "title" ? 20 : 120;
        if (e.target.value.length > maxChar) {
            e.target.value = e.target.value.slice(0, maxChar);
        }
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        const title = this.state.title;
        const text = this.state.text;

        if (title === '' || text === '') {
            alert('Please fill in both fields');
            return;
        }

        this.props.onAdd(title, text);

        this.setState({
            title: '',
            text: '' 
        })
    }

    render() {
        return (
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
        )
    }
}
