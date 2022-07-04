import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    description: "Desc del todo 1",
    completed: false,
  },

  {
    id: 2,
    title: "Todo 2",
    description: "Desc del todo 2",
    completed: true,
  },
];

const localTodos = JSON.parse(localStorage.getItem("todos"));

function App() {
  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }
    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  const handleComplete = (todoId) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(changedTodos);
  };

  const handleAddTask = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };
    const changedTodos = [newTodo, ...todos];

    setTodos(changedTodos);
  };

  const handleEditTask = (todoEdit) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );

    setTodos(changedTodos);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-4">
          <TodoForm
            handleAddTask={handleAddTask}
            todoEdit={todoEdit}
            handleEditTask={handleEditTask}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
