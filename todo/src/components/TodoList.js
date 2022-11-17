import React from "react";

export default function TodoList({ list, remove }) {
  return (
    <div>
      {list?.length > 0 ? (
        <ul>
          {list.map((entry, index) => (
            <div className="todolist" key={index}>
              <li>{entry}</li>
              <button className="buttonList" onClick={() => remove(entry)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div>
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}
