import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { AddTodo } from "./AddTodo";

const Todos = () => {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onComplete = (completed) => {
    setTodos(todos.filter((todo) => todo !== completed));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (todo) => {
    todo = { id: todos.length + 1, ...todo };
    setTodos([...todos, todo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [isAddTodo, setIsAddTodo] = useState(false);

  return (
    <>
      <div className="container">
        {isAddTodo ? <AddTodo addTodo={addTodo} display={setIsAddTodo} /> : ""}
        <div className="todos-title">
          <h1 className="text-center">Todos List</h1>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setIsAddTodo(true)}
          >
            Add Todo
          </button>
        </div>
        <div className="todos">
          {todos.length !== 0 ? (
            todos.map((todo) => {
              return (
                <TodoItem key={todos.id} todo={todo} onComplete={onComplete} />
              );
            })
          ) : (
            <h2 className="text-center empty-task">No Task To do</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Todos;
