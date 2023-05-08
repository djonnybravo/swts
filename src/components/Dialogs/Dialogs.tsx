import React from 'react';
import classes from "./Dialogs.module.css";
import {callbackify} from "util";

const Dialogs = () => {
    return (
        <div className={classes.dialogsPage}>
            <div className={classes.dialogs__items}>
                <div className={classes.dialog}> Dimych</div>
                <div className={classes.dialog}> Petya</div>
                <div className={classes.dialog + " " + classes.active}> Djon</div>
                <div className={classes.dialog}> Ivan</div>
                <div className={classes.dialog}> UserN</div>
            </div>
            <div className={classes.dialog__messages}>
                <div className={classes.message}>Hellloooo</div>
                <div className={classes.message}>Hellloooo</div>
            </div>
        </div>
    );
};

export default Dialogs;