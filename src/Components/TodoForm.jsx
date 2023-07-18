import React, { useState } from "react";

const TodoForm = (addTodo) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex g-2">
                <div className="me-2">
                    <input
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        type="text"
                        className="form-control "
                        placeholder="What is the task now!!!"
                    />
                </div>
                <button type="submit" className="btn btn-primary ms-2">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
