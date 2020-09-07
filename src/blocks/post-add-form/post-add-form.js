import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="form__form">
            <label className="form__label">
                Title:
                <input 
                    type="text" 
                    name="form-title" 
                    placeholder="What's the post about?"
                    className="form__input" />
            </label>            
            <label className="form__label">
                Text:
                <input 
                type="text" 
                name="form-text"
                placeholder="Share your thoughts"
                className="form__input" />
            </label>
            <button
                type="submit"
                className="form__button">
                submit
            </button>
        </form>
    )
}

export default PostAddForm;