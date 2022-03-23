import React, { useState } from "react";

import './MainContent.css'

export default TodoItem

function TodoItem(props) {
    const [isChecked, setChecked] = useState(() => 
    {return props.param.checked })

    function changeCheckbox() {
        setChecked(prevVal => !prevVal)
    }

    return (
        <div
            className={isChecked ? "todo-itemYes" : "todo-itemNo"}
            onClick={changeCheckbox}>
            <input
                type='checkbox'
                readOnly
                checked={isChecked ? 'checked' : ''}
            />
            <p>&emsp;
                {props.param.name}
            </p>
        </div>
    )
}
