import {ActionType, AddPostActionType, PostsType, RootStateType, UpdateNewPostTextActionType} from "./store";


export type InitStateType = {
    posts: Array<PostsType>,
    newPostText: string,

}

let initState: InitStateType = {

        posts: [
            {id: 1, message: "Hey, hello, how are you", likes: 10},
            {id: 2, message: "hello, i am good, and you", likes: 10},
            {id: 3, message: "I am good too, thanks", likes: 10},
            {id: 4, message: "This is great, wow!", likes: 10},
        ],
        newPostText: ""
}


const profilePageReducer = (state = initState, action: ActionType ) => {

        switch (action.type) {
            case "ADD-POST": {

                let newPost: PostsType = {
                    id: new Date().getTime(),
                    message: state.newPostText,
                    likes: 5,
                }
                state.posts.push(newPost)
                state.newPostText = ""


                return state
            }
            case "UPDATE-NEW-POST-TEXT": {
                state.newPostText = action.newPostText

                return state
            }
            default:
                return state
        }



}
export const AddPostAC = ():AddPostActionType => { return {type: "ADD-POST"}}
export const UpdateNewPostTextAC = (newPostText: string ):UpdateNewPostTextActionType => { return {type: "UPDATE-NEW-POST-TEXT", newPostText: newPostText}}

export default profilePageReducer