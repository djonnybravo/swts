import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import dialogItem from "./DialogItem/DialogItem";


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Petya"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "jenya"},
        {id: 5, name: "Alex"},
        {id: 6, name: "User"}
    ]
    let messagesData = [
        {id: 1, messageText: "mm"},
        {id: 2, messageText: "mm"},
        {id: 3, messageText: "mm"},
        {id: 4, messageText: "mm"},
    ]

    return (
        <div className={classes.dialogsPage}>
            <div className={classes.dialogs__items }>

                {dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}

            </div>
            <div className={classes.dialog__messages}>
                {messagesData.map(message => <Message messageText={message.messageText}/>)}
            </div>

        </div>
    );
};

export default Dialogs;