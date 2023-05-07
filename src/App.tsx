import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"content"}>
                 {/*<Profile />*/}
                <Dialogs/>
                <Route component={Dialogs}></Route>
            </div>
        </div>
    );
}

export default App;
