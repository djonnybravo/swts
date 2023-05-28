import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {RootState, store} from "./redux/redux-store";





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