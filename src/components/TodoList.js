import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleDelete, handleComplete, setTodoEdit }) => {
  return (
    <div>
      <h2 className="text-end display-4">Todo List</h2>
      {todos.length === 0 ? (
        <div className="alert alert-primary">No Task, Please Add one</div>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
