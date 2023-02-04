import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    return(
        <>
            <input
                placeholder="Add todo title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddTodo(title);
            }}>Add</button>
        </>
    )
}
export default AddTodo;