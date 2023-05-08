import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={classes.dialogsPage}>
            <div className={classes.dialogs__items }>
                <DialogItem name={"Petya"} path={1}/>
                <DialogItem name={"Petya"} path={1}/>
                <DialogItem name={"Petya"} path={1}/>
                <DialogItem name={"Petya"} path={1}/>
                <DialogItem name={"Petya"} path={1}/>
            </div>
            <div className={classes.dialog__messages}>
               <Message messageText={"WOW"}/>
               <Message messageText={"AUF"}/>
               <Message messageText={"RESPECT"}/>
            </div>

        </div>
    );
};

export default Dialogs;