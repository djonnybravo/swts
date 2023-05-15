import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import dialogItem from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/state";


const Dialogs = (props:DialogsPageType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {

    }
    return (
        <div className={classes.dialogsPage}>
            <div className={classes.dialogs__items }>

                {props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}

            </div>
            <div className={classes.dialog__messages}>
                {props.messages.map(message => <Message id={message.id} message={message.message}/>)}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
};

export default Dialogs;