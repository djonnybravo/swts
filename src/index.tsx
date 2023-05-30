import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {RootState, store} from "./redux/redux-store";


const StoreContext = React.createContext(null)

StoreContext.Provider
StoreContext.Consumer


let rerenderEntireTree = (state: RootState) => {
    ReactDOM.render(
        <App state={state} />,
        document.getElementById('root')
    );
}


let state = store.getState()
rerenderEntireTree(state)

store.subscribe(() => {

    rerenderEntireTree(state)
})