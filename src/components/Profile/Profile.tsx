import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsType} from "../../redux/store";
import { AddPostActionType, UpdateNewPostTextActionType} from "../../redux/store";



export type ProfilePropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classes.ProfilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    );
};


export default Profile;