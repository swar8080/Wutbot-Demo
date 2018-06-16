import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage(props){
    return (
        <div className='error-message'>
            <span className='error-message__text'>{props.message}</span>
        </div>
    );
}