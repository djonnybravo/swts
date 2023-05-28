import React from 'react';
import classes from "./Post.module.css";
import {PostsType} from "../../../../redux/store";


const Post = (props:PostsType) => {
    return (
        <div className={classes.item}>
            <img
                src="https://avatars.mds.yandex.net/i?id=c8b9a3ae2171417d23c1cf668bf7771a698cf1d6-8497455-images-thumbs&n=13"
                alt=""/>
            <div>
                 {props.message}
            </div>

            <div>
                <span>like {props.likes}</span>
            </div>


        </div>
    );
};

export default Post;