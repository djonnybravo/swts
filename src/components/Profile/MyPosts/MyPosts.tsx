import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType, ProfilePagePropsType} from "../Profile";


type MyPostsType = {
    posts: PostType[]
}


const MyPosts = (props:MyPostsType) => {




    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols={100} rows={5}></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)}

            </div>
        </div>
    );
};

export default MyPosts;

