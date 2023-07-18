import React from "react";
import { useState } from "react";
import TodoForm from "../Components/TodoForm";

const TodoWraper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        console.log(todoList);
    };
    return (
        <div>
            <h2 className="mb-5">My Todo Lists</h2>

            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default TodoWraper;
