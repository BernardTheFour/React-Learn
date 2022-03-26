import React, { useState } from "react";
import './MainContent.css'

export default TodoItem

/**
 * 
 * @param {id, name/title, checked} props 
 * @returns 
 */
function TodoItem(props) {
    const [isChecked, setChecked] = useState(() => 
    {return props.checked })

    function changeCheckbox() {
        setChecked(prevVal => !prevVal)
    }

    return (
        <div
            className={isChecked ? "todo-itemYes" : "todo-itemNo"}
            onClick={changeCheckbox}>
            <input
                key={props.id}
                type='checkbox'
                readOnly
                checked={isChecked ? 'checked' : ''}
            />
            <p>&emsp;
                {props.name}
            </p>
        </div>
    )
}
