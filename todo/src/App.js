import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);

      setTodo("");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="App-title">Todo APP</h1>
          <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
          <TodoList list={todos} remove={removeTodo} />
        </div>
      </header>
    </div>
  );
}

export default App;
