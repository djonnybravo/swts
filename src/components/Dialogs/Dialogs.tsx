import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import MessagesList from "./Message/MessagesList";

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

            <MessagesList/>
        </div>
    );
};

export default Dialogs;