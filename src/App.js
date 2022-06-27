import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import { v4 } from "uuid";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const markComplete = (id) => {
    const newTodos = todos.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header>
        <h1>Todo</h1>
      </header>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        markComplete={markComplete}
      />
    </div>
  );
}
