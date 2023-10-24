import { useState } from "react";
import { ITodo } from "./types";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
      isdone: false,
    };
    setTodos((prev) => [...prev, obj]);
  }
  function onDelete(id: any) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
