import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols={100} rows={5}></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post name={"Petya"} message={'Привет привет'}/>
                <Post name={"Dima"} message={'Привет привет'}/>
                <Post name={"Petya"} message={'Как делат'}/>
            </div>
        </div>
    );
};

export default MyPosts;

