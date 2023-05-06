import React from 'react';
import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://avatars.mds.yandex.net/i?id=c8b9a3ae2171417d23c1cf668bf7771a698cf1d6-8497455-images-thumbs&n=13" alt=""/>
            Post text
        </div>
    );
};

export default Post;