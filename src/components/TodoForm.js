import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ handleAddTask, todoEdit, handleEditTask, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Title can not be empty");
      return;
    }
    if (description.trim() === "") {
      setError("Description can not be empty");
      return;
    }
    if (todoEdit) {
      // Edit
      handleEditTask(formValues);
      setSuccess("Edited Successfully");
    } else {
      // Add
      handleAddTask(formValues);
      setSuccess("Added Successfully");
      setFormValues(initialFormValues);
    }
    setTimeout(() => {
      setSuccess(null);
    }, 3000);
    setError(null);
  };

  return (
    <div>
      <h2 className="text-center display-5">
        {todoEdit ? "Edit Task" : "New Task"}
      </h2>
      {todoEdit && (
        <button
          className="btn btn-sm btn-warning mb-2"
          onClick={() => setTodoEdit(null)}
        >
          Cancel Edit
        </button>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Description"
          className="form-control mt-3"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>
        <div className="d-grid">
          <button className="btn btn-primary mt-2">
            {todoEdit ? "Edit Task" : "Add Task"}
          </button>
        </div>
      </form>
      {/* {error ? <div className="alert alert-danger mt-3">{error}</div> : null} */}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {success && <div className="alert alert-success mt-3">{success}</div>}
    </div>
  );
};

export default TodoForm;
