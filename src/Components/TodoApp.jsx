import React, { useState } from "react";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const completeTask = (index) => {
        const completedTask = tasks[index];
        deleteTask(index);
        setCompletedTasks([...completedTasks, completedTask]);
    };

    const deleteCompleteTask = (index) => {
        const newCompleteTasks = [...completedTasks];
        newCompleteTasks.splice(index, 1);
        setCompletedTasks(newCompleteTasks);
    };

    return (
        <div>
            <h1 className="mb-5 mt-2">
                My To-Do List For
                {" " + new Date().toDateString()}`
            </h1>
            <form onSubmit={addTask} className="d-flex">
                <input
                    className="form-control me-5"
                    type="text"
                    placeholder=" what is the task now"
                    value={task}
                    onChange={handleTaskChange}
                />
                <button className="btn btn-primary" type="submit">
                    Add Task
                </button>
            </form>
            {tasks.length !== 0 ? (
                <h2 className="mt-5">The Tasks I have to Complete!!! </h2>
            ) : (
                <h2></h2>
            )}

            <table className="table table-striped table-hover">
                {tasks.map((task, index) => (
                    <tbody key={index}>
                        <td scope="col-2">
                            <h4>{index + 1}</h4>
                        </td>
                        <td scope="col-6">
                            <h4>{task}</h4>
                        </td>
                        <td scope="col-4">
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => completeTask(index)}
                            >
                                Complete
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                        </td>
                    </tbody>
                ))}
            </table>
            {completedTasks.length !== 0 ? (
                <h2>The tasks I have completed!!!</h2>
            ) : (
                <h2></h2>
            )}
            <table className="table table-striped table-hover">
                {completedTasks.map((task, index) => (
                    <tbody key={index}>
                        <td>
                            <h4>{index + 1}</h4>
                        </td>
                        <td>
                            <h4>{task}</h4>
                        </td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deleteCompleteTask(index)}
                            >
                                Delete
                            </button>
                        </td>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default TodoList;
