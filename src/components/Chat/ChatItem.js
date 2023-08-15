import React from 'react';
import styles from './Chat.module.css';

const ChatItem = (props) => {
    const { body, user } = props.message;

    return (
        <article className={styles.message}>
            <img
                src={`https://robohash.org/${user.username}`}
                alt={user.username}
                className={styles.userAvatar}
            />
            <div className={styles.wrapperColumn}>
                <p className={styles.nickname}>{user.username}</p>
                <p>{body}</p>
            </div>
        </article>
    );
}

export default ChatItem;

