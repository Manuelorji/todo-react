import TodoItem from "../TodoItem/TodoItem";
export default function TodoList({ todos, deleteTodo, markComplete }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            markComplete={markComplete}
          />
        );
      })}
    </div>
  );
}
