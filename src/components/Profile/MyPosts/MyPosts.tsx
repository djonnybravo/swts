import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { ProfilePageType} from "../../../redux/state";

const MyPosts = (props:ProfilePageType) => {

    let addPost = () => {

    }

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea
                    name=""
                    id=""
                    cols={100}
                    rows={5}
                    ref={newPostElement}
                >

                </textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {props.posts.map(post => <Post id={post.id} message={post.message} likes={post.likes}/>)}

            </div>
        </div>
    );
};

export default MyPosts;

