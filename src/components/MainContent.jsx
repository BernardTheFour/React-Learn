import React, { useState, useEffect, useContext } from "react";
import TodosAPI from './todos/TodosAPI'

import TodoItem from './todos/TodoItem'
import "./MainContent.css";
import { TodoContext, UserContext } from "./context/TodoContext";

export default MainContent

function MainContent() {
    let [UserId, setUserId] = useState(0)
    let [todoList, setTodo] = useState([])
    const [todoContext, setTodoCxt] = useContext(TodoContext)
    

    useEffect(async () => {
        // check it was null or not
        let todos = TodosAPI(!UserId? 0: UserId)

        todos.data.then(items => {
            let data = []
            let completed = 0

            items.map(item => {
                data.push(<TodoItem
                    key={item.id}
                    name={item.title}
                    checked={item.completed} />)

                    if(item.completed){
                        completed++
                    }
            })
            
            setTodoCxt(completed)
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
                        onChange={e=>setUserId(e.target.value < 0 && 0)}
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