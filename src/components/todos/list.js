const List = ({ todos }) => {
    if (!todos) {
        return "There are no tasks"
    }
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <div className="todo-item">
                    {todo}
                </div>
            ))}
        </div>
    )
}

export default List;