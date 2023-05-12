import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


export type ProfilePagePropsType = {
    posts: PostType[]
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

const Profile = (props: ProfilePagePropsType) => {
    return (
        <div className={classes.ProfilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};


export default Profile;