import React, { useState, useEffect } from "react";
import CallAPI from './CallAPI'

import TodoItem from './TodoItem'
import "./MainContent.css";

export default MainContent

function MainContent() {
    let [UserId, setUserId] = useState(1)
    let [todoList, setTodo] = useState([])

    useEffect(async () => {
        // check it was null or not
        let todos = CallAPI(!UserId? 0: UserId)

        todos.data.then(items => {
            let data = []

            items.map(item => {
                data.push(<TodoItem
                    key={item.id}
                    name={item.title}
                    checked={item.checked} />)
            })
            console.log(data)
            setTodo(data)
            return todos.cancel()
        })

    }, [UserId])

    return (
        <main className="content">
            <div>
                <form>
                    INPUT USER ID<br/>
                    <input
                        type="number"
                        name="Id"
                        placeholder="Enter User Id"
                        onChange={e=>setUserId(e.target.value)}
                        value={UserId}
                    />
                </form>
            </div>
            <h2>Todo List</h2>
            <div className="todo-list">
                {todoList}
            </div>
        </main>
    )
}