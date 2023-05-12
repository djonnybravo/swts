import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Привет привет", likesCount: 12 },
        {id: 2, message: "Привет привет", likesCount: 12 },
        {id: 3, message: "Привет привет", likesCount: 12 }

    ]

    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols={100} rows={5}></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)}

            </div>
        </div>
    );
};

export default MyPosts;

