import React from 'react';
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


type propsType = {
    name: string
    id: number
}

const DialogItem = (props:propsType) => {
    return (
            <div className={classes.dialog + " " + classes.active}>
                <NavLink to={'/dialogs/'}>{props.name}</NavLink>
            </div>

    );
};

export default DialogItem;