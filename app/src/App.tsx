import "bootstrap/dist/css/bootstrap.css";
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
      isDone: false,
      isEdit: false,
    };
    setTodos((prev) => [...prev, obj]);
  }

  function handleDelete(id: Number) {
    const filtered = todos.filter((t) => t.id != id);
    setTodos(filtered);
  }

  function handleEdit(id: Number) {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((nt) => nt.id === id);
    if (idx !== -1) {
      newTodos[idx]["isEdit"] = true;
    }
    setTodos(newTodos);
  }

  function handleUpdate(id: Number, text: string) {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((nt) => nt.id === id);
    if (idx !== -1) {
      newTodos[idx]["isEdit"] = false;
      newTodos[idx]["text"] = text;
    }
    setTodos(newTodos);
  }

  function handleStrike(id: Number, type: string) {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((nt) => nt.id === id);
    if (idx !== -1) {
      if (type === "done") newTodos[idx]["isDone"] = true;
      else newTodos[idx]["isDone"] = false;
    }
    setTodos(newTodos);
  }
  return (
    <div className="">
      <h1 className="todo-title">My Todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
        handleStrike={handleStrike}
      />
    </div>
  );
}

export default App;

// const updatelike = (id) => {
//   if (editText !== "") {
//     const updatedlikes = likes.map((like) =>
//       like.id === id ? { ...like, text: editText } : like
//     );

//     setlikes(updatedlikes);
//     setEditIndex();
//     setEditText("");
//   }
// };
