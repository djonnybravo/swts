import React from 'react';
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";




const DialogItem = (props:DialogType) => {
    return (
            <div className={classes.dialog + " " + classes.active}>
                <NavLink to={'/dialogs/'}>{props.name}</NavLink>
            </div>

    );
};

export default DialogItem;