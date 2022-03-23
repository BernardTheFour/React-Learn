import React from "react";
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './index.css'

export default App

function App(){
    return(
        <div className="wholepage">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
};