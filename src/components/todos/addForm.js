import React, { useState } from 'react';
import { getTokenHeader } from '../services/auth';

const addTask = (task) => fetch('http://localhost:4000/tasks', {
    method: 'POST',
    body: JSON.stringify({ task }),
    headers: {
        'Content-Type': 'application/json',
        Authorization: getTokenHeader(),
    },
});

const AddTodo = () => {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const result = await addTask(task);
        if (result.status === 200) {
            setTask('');
        }
    };

    const handleChange = (e) => {
        const { value } = e.target;

        setTask(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add task"
                onChange={handleChange}
                value={task}
                name="task"
                id="task"
                required
            />
            <button type="submit" className="btn">Add</button>
        </form>
    )
}

export default AddTodo;