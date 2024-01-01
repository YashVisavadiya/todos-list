import React from "react";
import PropTypes from "prop-types";

export const TodoItem = (props) => {
  return (
    <>
      <div className="todo-item">
        <div className="todo-item-name">
          <h4>{props.todo.name}</h4>
        </div>
        <div className="todo-item-desc">
          <p>{props.todo.description}</p>
        </div>
        <button
          className="btn btn-sm btn-success todo-item-btn"
          onClick={() => props.onComplete(props.todo)}
        >
          Complete
        </button>
      </div>
      <hr />
    </>
  );
};

TodoItem.propTypes = {
  key: PropTypes.number,
  todo: PropTypes.object,
  onComplete: PropTypes.func,
};
