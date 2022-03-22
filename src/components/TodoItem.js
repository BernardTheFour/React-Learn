import React from "react";

export default TodoItem

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type='checkbox' checked={props.param.checked && 'checked'}/> {props.param.name} <br />
        </div>
    )
}