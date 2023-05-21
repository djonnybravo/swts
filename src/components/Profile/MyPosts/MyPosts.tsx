import React, {ChangeEvent} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePropsType} from "../Profile";
import {AddPostAC, UpdateNewPostTextAC} from "../../../redux/store";

const   MyPosts = (props:ProfilePropsType) => {
    //let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () =>   props.dispatch(AddPostAC())

    const onPostTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => props.dispatch(UpdateNewPostTextAC(e.currentTarget.value))




    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea
                    name=""
                    id=""
                    cols={100}
                    rows={5}
                    // ref={newPostElement}
                    onChange={onPostTextChange}
                    value={props.newPostText}
                >

                </textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {props.posts.map(post => <Post key={post.id} id={post.id} message={post.message} likes={post.likes}/>)}

            </div>
        </div>
    );
};

export default MyPosts;

