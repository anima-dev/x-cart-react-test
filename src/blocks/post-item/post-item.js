import React from 'react';
import './post-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const PostItem = () => {
    return (
        <li className="post__item">
            <div className="post__header">
                <h3 className="post__title">Post Title</h3>
                <button type="button" className="post__star">
                    <FontAwesomeIcon icon={faStar} color="#DADBDC" />
                </button>
            </div>
            <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </li>
    )
}

export default PostItem;