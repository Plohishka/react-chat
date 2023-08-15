import React, { useState } from 'react';
import styles from './MessageArea.module.css';

const MessageArea = (props) => {
    const [inputMessage, setMessage] = useState('');

    const changeHandler = ({ target: { value } }) => {
        setMessage(value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.addMessage(inputMessage);
        setMessage('');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <textarea value={inputMessage} onChange={changeHandler} className={styles.textarea} />
                <button type='submit'>Send mesage</button>
            </form>
        </div>
    );
}

export default MessageArea;
