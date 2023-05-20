import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, PostsType, ProfilePageType, updateNewPostText} from "../../redux/state";


export type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.ProfilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};


export default Profile;