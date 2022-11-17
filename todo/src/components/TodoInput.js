import React from "react";

export default function TodoInput({ todo, setTodo, addTodo }) {
  return (
    <div>
      <input
        type="text"
        value={todo}
        name="todo"
        onChange={(e) => {
          setTodo(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button className="addbutton" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}
