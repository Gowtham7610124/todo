import { useState } from "react";

export function TodoInput(props) {
    const { handelAddTodo } = props;
    const [inputValue, setInputValue] = useState('');
    // console.log("test are        ------      ",inputValue)
    return (
        <div className="input-container">
            <input
                value={inputValue}
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => {
                if(!inputValue){return}
                handelAddTodo(inputValue)
                setInputValue('')
            }
                }>
                <i className="fa-solid fa-square-plus"></i>
            </button>
        </div>
    );
}
