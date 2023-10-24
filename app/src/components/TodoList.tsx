import { ITodo } from "../types";

interface ITodoList {
  todos: ITodo[];
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <div>
      {todos.map((t) => (
        <p key={t.id.toString()}>{t.text}</p>
      ))}
    </div>
  );
};

export default TodoList;
