import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsType} from "../../redux/store";




export type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string

}


const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.ProfilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} />
        </div>
    );
};


export default Profile;