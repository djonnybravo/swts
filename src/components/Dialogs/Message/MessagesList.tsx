import React from 'react';
import classes from "./MessageList.module.css";

const MessagesList = () => {
    return (
        <div className={classes.dialog__messages}>
            <div className={classes.message}>Hellloooo</div>
            <div className={classes.message}>Hellloooo</div>
        </div>
    );
};

export default MessagesList;