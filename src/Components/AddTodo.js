import React, { useState } from "react";

export const AddTodo = ({ addTodo, display }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Name and Description Can't be Empty!!!");
    } else {
      const todo = {
        name,
        description,
      };
      addTodo(todo);
      setName("");
      setDescription("");
    }
  };

  return (
    <form className="fs-5 mx-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <div className="add-todo-title">
          <h1>Add Todo</h1>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => display(false)}
          >
            Close
          </button>
        </div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-sm btn-success">
        Submit
      </button>
      <hr />
    </form>
  );
};
