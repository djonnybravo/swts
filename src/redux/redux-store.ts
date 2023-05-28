import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";



const  rootReducer = combineReducers({
    dialogs: dialogsPageReducer,
    profile: profilePageReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
