import React from 'react';
import PropTypes from 'prop-types';
import './RedditComment.css';

export default function RedditComment(props){
    console.log(props);

    return (
        <div className='reddit-comment'>
            <div className='reddit-comment__body-container'>
                <div className='reddit-comment__body'>{props.body}</div>
            </div>
            <div className='reddit-comment__source-container'>
                <span className='reddit-comment__original-post-meta'>
                    <span>Original Post: </span>
                    <a
                        className='reddit-comment__original-post-url'
                        href={props.postLink}
                        title={props.title}
                        target='_blank'
                        rel='noopener noreferrer'
                    >{props.title}</a>
                </span>
                <div className='reddit-comment__original-post-subreddit'>
                    <span>From </span>
                    <a href={props.subredditLink} target='_blank' rel='noopener noreferrer'>r/{props.subreddit}</a>
                </div>
            </div>
        </div>
    );
}

RedditComment.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    redditLink: PropTypes.string.isRequired
};