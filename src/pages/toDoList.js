import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { AddTodo, ToDosList } from '../components/todos';
import { getTokenHeader } from '../services/auth';

const getTodos = () => fetch("http://localhost:4000", {
    headers: {
        'Content-Type': 'application/json',
        Authorization: getTokenHeader(),
    },
});

const ToDoList = () => {
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState();
    const history = useHistory();

    useEffect(() => {
        // redirect to login if no JWT token is set
        // if (!token) {
        //     history.push('/login')
        // }
    }, []);

    useEffect(async () => {
        const response = await getTodos();

        setLoading(false)

        if (response.status === 200) {
            setTodos(response.data);
        }
    }, []);

    if (loading) {
        return "Loading...";
    }

    return (
        <div>
            <AddTodo />
            <ToDosList todos={todos} />
        </div>
    );
};

export default ToDoList;