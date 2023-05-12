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


function App() {
    let dialogsData = [
        {id: 1, name: "Petya"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "jenya"},
        {id: 5, name: "Alex"},
        {id: 6, name: "User"}
    ]
    let messagesData = [
        {id: 1, messageText: "mm"},
        {id: 2, messageText: "mm"},
        {id: 3, messageText: "mm"},
        {id: 4, messageText: "mm"},
    ]
    let postsData = [
        {id: 1, message: "Привет привет", likesCount: 12 },
        {id: 2, message: "Привет привет", likesCount: 12 },
        {id: 3, message: "Привет привет", likesCount: 12 }

    ]

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={"/profile"} render={() => <Profile posts={postsData}/>}></Route>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogs={dialogsData} messages={messagesData}/>}></Route>

                    <Route path={"/music"} render={() => <MusicPage/>}></Route>
                    <Route path={"/news"} render={() => <NewsPage/>}></Route>
                    <Route path={"/settings"} render={() => <SettingsPage/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
