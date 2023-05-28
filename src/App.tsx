import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import MusicPage from "./components/Music/MusicPage";
import NewsPage from "./components/News/NewsPage";
import SettingsPage from "./components/Settings/SettingsPage";
import {StoreType} from "./redux/store";


type AppPropsTye = {
    store: StoreType
}

function App(props: AppPropsTye) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={"/profile"}
                           render={() =>
                               <Profile
                                   posts={props.store._state.profilePage.posts}
                                   newPostText={props.store._state.profilePage.newPostText}
                                   dispatch={props.store.dispatch.bind(props.store)}
                               />}></Route>
                    <Route path={"/dialogs"} render={() =>
                        <Dialogs
                            dialogs={props.store._state.dialogsPage.dialogs}
                            messages={props.store._state.dialogsPage.messages}
                            newMessageText={props.store._state.dialogsPage.newMessageText}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />}></Route>

                    <Route path={"/music"} render={() => <MusicPage/>}></Route>
                    <Route path={"/news"} render={() => <NewsPage/>}></Route>
                    <Route path={"/settings"} render={() => <SettingsPage/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
