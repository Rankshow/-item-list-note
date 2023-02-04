import { useState } from "react";
import AddTodo from "./component/AddTodo";
import Tasklist from "./component/TaskList";
import "./App.css";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  // function to handle the todos
  const handleAddTodos = (title) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  };
  //  function to handle the event in todos onchange
  const handleChangeTodos = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextId.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  };

  // function to handle the delete button
  const hanldeDeleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  //  Rendering every component to the DOM

  return (
    <>
      <AddTodo onAddTodo={handleAddTodos} />
      <Tasklist todos={todos} onChangeTodo={handleChangeTodos} onDeleteTodo={hanldeDeleteTodo}/>
    </>
  );
};

export default App;
