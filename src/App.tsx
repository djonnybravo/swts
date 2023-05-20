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
import {addNewMessage, addPost, state, updateMessageText, updateNewPostText} from "./redux/state";



function App() {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={"/profile"}
                           render={() =>
                               <Profile
                                   posts={state.profilePage.posts}
                                   addPost={addPost}
                                   newPostText={state.profilePage.newPostText}
                                   updateNewPostText={updateNewPostText}
                               />}></Route>
                    <Route path={"/dialogs"} render={() =>
                        <Dialogs
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                            newMessageText={state.dialogsPage.newMessageText}
                            updateMessageText={updateMessageText}
                            addNewMessage={addNewMessage}
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
