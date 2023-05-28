import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/store";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogsPageReducer";
import {store} from "../../redux/redux-store";



type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}


const Dialogs = (props:DialogsPropsType) => {

    // let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () =>  store.dispatch(AddMessageAC())


    const onMessageTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {

        store.dispatch(UpdateNewMessageTextAC(e.currentTarget.value))

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
                <textarea name=""
                          id=""
                          cols={100}
                          rows={5}

                          onChange={onMessageTextChange}
                          value={props.newMessageText}
                ></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
};

export default Dialogs;