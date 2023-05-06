import React from 'react';
import classes from "./Profile.module.css";
import {inspect} from "util";

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
            <div>
                My posts
                <div>new post</div>
                <div className={classes.posts}>
                    <div className={classes.postItem}>post1</div>
                    <div className={classes.postItem}>post2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;