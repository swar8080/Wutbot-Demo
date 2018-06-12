import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage(props){
    return (
        <div className='error-message__container'>
            <span className='error-message__message'>{props.message}</span>
        </div>
    );
}