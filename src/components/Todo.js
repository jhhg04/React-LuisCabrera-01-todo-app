import React from "react";

const Todo = ({ todo, handleDelete, handleComplete, setTodoEdit }) => {
  return (
    <div>
      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title text-end">
            {todo.title}
            <button
              className={`btn btn-sm ${
                todo.completed ? "btn-outline-success" : "btn-success"
              } ms-2`}
              onClick={() => handleComplete(todo.id)}
            >
              {todo.completed ? "Done" : "Finish"}
            </button>
          </h3>
          <p className="card-text text-end"> {todo.description}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() => setTodoEdit(todo)}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
