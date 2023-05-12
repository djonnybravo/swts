import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import dialogItem from "./DialogItem/DialogItem";

type DialogsPropsType = {
    dialogs: dialogType[]
    messages: messageType[]
}
type dialogType = {
    id: number
    name: string
}

type messageType = {
    id: number
    messageText: string
}
const Dialogs = (props:DialogsPropsType) => {



    return (
        <div className={classes.dialogsPage}>
            <div className={classes.dialogs__items }>

                {props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}

            </div>
            <div className={classes.dialog__messages}>
                {props.messages.map(message => <Message messageText={message.messageText}/>)}
            </div>

        </div>
    );
};

export default Dialogs;