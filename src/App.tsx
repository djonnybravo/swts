import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Profile from './components/Profile/Profile';


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"content"}>

                <Route component={Profile}></Route>
                <Route component={Dialogs}></Route>
            </div>
        </div>
    );
}

export default App;
