import React, {useState} from 'react';
import classes from "./MyPosts.module.css";

const MyPosts = () => {

    return (
        <div>
            My posts
            <div>new post</div>
            <div className={classes.posts}>
                <div className={classes.postItem}>post1</div>
                <div className={classes.postItem}>post2</div>
            </div>
        </div>
    );
};

export default MyPosts;

