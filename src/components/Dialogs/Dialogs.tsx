import React, {ChangeEvent} from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogType, MessageType,} from "../../redux/state";


type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    updateMessageText: (newMessageText: string) => void
    addNewMessage: () => void
}


const Dialogs = (props:DialogsPropsType) => {

    // let newMessageElement = React.createRef<HTMLTextAreaElement>()
    let addMessage = () =>  props.addNewMessage()


    const onMessageTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {

        props.updateMessageText(e.currentTarget?.value)

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