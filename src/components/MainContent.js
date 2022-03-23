import React from "react";

import TodoItem from './TodoItem'
import "./MainContent.css";

export default MainContent

function MainContent() {  
    return (
        <main className="content">
            <h2>Todo List</h2>
            <div className="todo-list">
                <TodoItem param={{name: `Title 1`, checked: true}}/>
                <TodoItem param={{name: `Title 2`, checked: false}}/>
            </div>
        </main>
    )
}