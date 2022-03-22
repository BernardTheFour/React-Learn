import React from "react";

import TodoItem from './TodoItem'
import "./MainContent.css";

export default MainContent

function MainContent() {
    return (
        <main className="content">
            <h2>Todo List</h2>
            <div className="todo-list">
                <TodoItem param={{name: `List A`, checked: true}}/>
                <TodoItem param={{name: `List B`, checked: false}}/>
                <TodoItem param={{name: `List C`, checked: false}}/>
            </div>
        </main>
    )
}