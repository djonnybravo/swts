

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


export const state: RootStateType = {
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
    },

}

export const addPost = () => {
    let newPost: PostsType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likes: 5,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree()
}

export const addNewMessage = () => {
    let newMessage: MessageType = {
        id: new Date().getTime(),
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ""
    rerenderEntireTree()
}

export const updateMessageText = (newMessageText: string) => {
    state.dialogsPage.newMessageText = newMessageText
    rerenderEntireTree()
}


export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

let rerenderEntireTree = () => {

}