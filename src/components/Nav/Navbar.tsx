import React from 'react';
import classes from "./Navbar.module.css";
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>

        </nav>
    );
};

export default Navbar;