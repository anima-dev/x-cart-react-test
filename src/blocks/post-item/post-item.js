import React from 'react';
import './post-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

    const PostItem = ({title, body, liked, onStarClick}) => {

    
    let postStarClasses = "post__star";

    if (liked) {
        postStarClasses += " post__star_liked"
    }

    let postTitle = title.length >= 21 ? title.slice(0, 21) + "..." : title;
    let postBody = body.length >= 120 ? body.slice(0, 120) + "..." : body;

    return (
        <div className="post__item">
            <div className="post__header">
            <h3 className="post__title">{postTitle}</h3>
                <button 
                    type="button" 
                    className={postStarClasses}
                    onClick={onStarClick}>
                    <FontAwesomeIcon icon={faStar} />
                </button>
            </div>
            <div className="post__text">
                {postBody}
            </div>
        </div>
    )
}

export default PostItem;


