import React from 'react';
import classes from "./Profile.module.css";
import {inspect} from "util";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.ProfilePage}>
            <div>
                <img src="https://telecomdom.com/wp-content/uploads/2019/12/shapka_for_youtube-fon-6-2048x1152.jpg"
                     alt="" width="1440px" height="200px"/>
            </div>
            <div>
                <div>
                    <img
                        src="https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-12.jpg"
                        alt="" width="100px" height="100px"/>
                </div>
                <div>

                </div>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;