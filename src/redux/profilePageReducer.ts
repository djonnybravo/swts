import {ActionType, AddPostActionType, PostsType, RootStateType, UpdateNewPostTextActionType} from "./store";


const profilePageReducer = (state:RootStateType, action: ActionType ) => {

        switch (action.type) {
            case "ADD-POST": {

                let newPost: PostsType = {
                    id: new Date().getTime(),
                    message: state.profilePage.newPostText,
                    likes: 5,
                }
                state.profilePage.posts.push(newPost)
                state.profilePage.newPostText = ""


                return state
            }
            case "UPDATE-NEW-POST-TEXT": {
                state.profilePage.newPostText = action.newPostText

                return state
            }
            default:
                return state
        }



}


export default profilePageReducer