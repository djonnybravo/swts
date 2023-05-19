import ReactDOM from "react-dom";
import App from "./App";
import {RootStateType} from "./redux/state";



export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}