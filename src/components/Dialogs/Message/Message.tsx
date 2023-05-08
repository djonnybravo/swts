import React from 'react';
import classes from "./Message.module.css";

type messagePropsType = {
    messageText: string
}

const Message = (props:messagePropsType) => {
    return (

            <div className={classes.message}>
                {props.messageText}
            </div>


    );
};

export default Message;