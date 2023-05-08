import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={"/profile"} activeClassName={classes.activeNav}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs"} activeClassName={classes.activeNav}>Messages</NavLink>
            </div >
            <div className={classes.item}>
                <NavLink to={"/news"} activeClassName={classes.activeNav}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/music"} activeClassName={classes.activeNav}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/settings"} activeClassName={classes.activeNav}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;