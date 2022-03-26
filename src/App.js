import React, {useState, useMemo} from "react";
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './index.css'
import { TodoContext } from "./components/context/TodoContext";

export default App

function App() {
    const [todoContext, setTodoCxt] = useState(0)    

    return (
        <TodoContext.Provider value={[todoContext, setTodoCxt]}>
            <div className="wholepage">
                <Header />
                <MainContent />
                <Footer />
            </div>
        </TodoContext.Provider>
    )
};