import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";



const Profile = (props: ProfilePageType) => {
    return (
        <div className={classes.ProfilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};


export default Profile;