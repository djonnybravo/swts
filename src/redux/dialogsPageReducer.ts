import {
    ActionType,
    AddMessageActionType,
    DialogType,
    MessageType,
    RootStateType,
    UpdateNewMessageTextActionType
} from "./store";

const initialState = {
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

type initialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

const dialogsPageReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case "ADD-MESSAGE": {

            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ""


            return state
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newMessageText

            return state
        }
        default:
            return state
    }


}

export const AddMessageAC = ():AddMessageActionType => { return {type: "ADD-MESSAGE"}}
export const UpdateNewMessageTextAC = (newMessageText: string ):UpdateNewMessageTextActionType => { return {type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: newMessageText}}
export default dialogsPageReducer
