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
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"content"}>
                    <Route path={"/profile"} component={Profile}></Route>
                    <Route path={"/dialogs"} component={Dialogs}></Route>
                    <Route path={"/music"} component={MusicPage}></Route>
                    <Route path={"/news"} component={NewsPage}></Route>
                    <Route path={"/settings"} component={SettingsPage}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
