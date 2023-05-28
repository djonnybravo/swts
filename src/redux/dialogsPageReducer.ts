import {ActionType, AddMessageActionType, MessageType, RootStateType, UpdateNewMessageTextActionType} from "./store";



const dialogsPageReducer = (state: RootStateType, action: ActionType) => {

    switch (action.type) {
        case "ADD-MESSAGE": {

            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.dialogsPage.newMessageText
            }
            state.dialogsPage.messages.push(newMessage)
            state.dialogsPage.newMessageText = ""


            return state
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.dialogsPage.newMessageText = action.newMessageText

            return state
        }
        default:
            return state
    }


}

export const AddMessageAC = ():AddMessageActionType => { return {type: "ADD-MESSAGE"}}
export const UpdateNewMessageTextAC = (newMessageText: string ):UpdateNewMessageTextActionType => { return {type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: newMessageText}}
export default dialogsPageReducer
