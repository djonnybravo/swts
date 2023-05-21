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
import {store} from "./redux/store";




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
                                   posts={store._state.profilePage.posts}
                                   addPost={store.addPost.bind(store)}
                                   newPostText={store._state.profilePage.newPostText}
                                   updateNewPostText={store.updateNewPostText.bind(store)}
                               />}></Route>
                    <Route path={"/dialogs"} render={() =>
                        <Dialogs
                            dialogs={store._state.dialogsPage.dialogs}
                            messages={store._state.dialogsPage.messages}
                            newMessageText={store._state.dialogsPage.newMessageText}
                            updateMessageText={store.updateMessageText.bind(store)}
                            addNewMessage={store.addNewMessage.bind(store)}
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
