import { useState } from "react";
import "./TaskList.css"

const AddTodo = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    return(
        <>
         <div className="TodoInput">
            <input className="inputValue"
                placeholder="Add todo title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button className="btnAdd" onClick={() => {
                setTitle('');
                onAddTodo(title);
            }}>Add</button>
            </div>
        </>
    )
}
export default AddTodo;