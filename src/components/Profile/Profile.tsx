import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, PostsType, ProfilePageType} from "../../redux/state";


export type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: (newPost: string) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.ProfilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={addPost}/>
        </div>
    );
};


export default Profile;