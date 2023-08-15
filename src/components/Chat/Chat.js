import React from 'react';
import styles from './Chat.module.css';
import ChatItem from './ChatItem';

const Chat = (props) => {
    const { dialog } = props;
    const messageArray = dialog.map((message) => <ChatItem message={message} key={message.id}/> )


    return (
        <div className={styles.container}>
            {messageArray}
        </div>
    );
}

export default Chat;
