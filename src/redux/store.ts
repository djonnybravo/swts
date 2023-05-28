import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";


export type PostsType = {
    id: number
    message: string
    likes: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string,

}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,

}


export type ActionType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageTextActionType | AddMessageActionType
export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: string
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newMessageText: string
}


export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    addNewMessage: () => void
    updateMessageText: (newMessageText: string) => void
    getState: () => RootStateType
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageTextActionType | AddMessageActionType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hey, hello, how are you", likes: 10},
                {id: 2, message: "hello, i am good, and you", likes: 10},
                {id: 3, message: "I am good too, thanks", likes: 10},
                {id: 4, message: "This is great", likes: 10},
            ],
            newPostText: ""

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ],
            messages: [
                {id: 1, message: "Hey"},
                {id: 2, message: "HELLO"},
                {id: 3, message: "YO"},
                {id: 4, message: "YO"},
            ],
            newMessageText: ""
        }
    },
    _rerenderEntireTree() {
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    addPost() {

        let newPost: PostsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likes: 5,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._rerenderEntireTree()

    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._rerenderEntireTree()
    },
    addNewMessage() {
        let newMessage: MessageType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ""
        this._rerenderEntireTree()
    },
    updateMessageText(newMessageText: string) {
        this._state.dialogsPage.newMessageText = newMessageText
        this._rerenderEntireTree()
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        profilePageReducer(this._state, action)
        profilePageReducer(this._state, action)
        dialogsPageReducer(this._state, action)
        dialogsPageReducer(this._state, action)
        this._rerenderEntireTree()
    }
}

export const AddPostAC = ():AddPostActionType => { return {type: "ADD-POST"}}
export const UpdateNewPostTextAC = (newPostText: string ):UpdateNewPostTextActionType => { return {type: "UPDATE-NEW-POST-TEXT", newPostText: newPostText}}
export const AddMessageAC = ():AddMessageActionType => { return {type: "ADD-MESSAGE"}}
export const UpdateNewMessageTextAC = (newMessageText: string ):UpdateNewMessageTextActionType => { return {type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: newMessageText}}

