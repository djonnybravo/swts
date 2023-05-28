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

import {RootState} from "./redux/redux-store";


type AppPropsTye = {
    state: RootState
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
                                   posts={props.state.profile.posts}
                                   newPostText={props.state.profile.newPostText}
                               />}></Route>
                    <Route path={"/dialogs"} render={() =>
                        <Dialogs
                            dialogs={props.state.dialogs.dialogs}
                            messages={props.state.dialogs.messages}
                            newMessageText={props.state.dialogs.newMessageText}

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
