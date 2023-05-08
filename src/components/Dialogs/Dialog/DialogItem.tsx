import React from 'react';
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


type propsType = {
    name: string
    path: number
}

const DialogItem = (props:propsType) => {
    return (
            <div className={classes.dialog + " " + classes.active}>
                <NavLink to={'/dialogs/' + props.path}>{props.name}</NavLink>
            </div>

    );
};

export default DialogItem;