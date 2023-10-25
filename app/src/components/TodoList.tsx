import { ITodo } from "../types";
import EditTodo from "./EditTodo";

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handleDelete: (n: Number) => void;
  handleEdit: (n: Number) => void;
  handleUpdate: (n: Number, t: string) => void;
  handleStrike: (n: Number, t: string) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  handleDelete,
  handleEdit,
  handleUpdate,
  handleStrike,
}) => {
  function handleSave(id: Number, value: string) {
    if (value) {
      handleUpdate(id, value);
    }
  }

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>, id: Number) {
    if (e.target.checked) {
      handleStrike(id, "done");
    } else {
      handleStrike(id, "undone");
    }
  }

  return (
    <div>
      {todos.map((t) => (
        <div key={t.id.toString()}>
          {t.isEdit ? (
            <>
              <EditTodo item={t} handleSave={handleSave} />
            </>
          ) : (
            <div className="todolist">
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={(e) => handleCheck(e, t.id)}
              />
              <span
                className="px-3"
                style={t.isDone ? { textDecoration: "line-through" } : {}}
              >
                {t.text}
              </span>
              <div>
                <button className="edit-btn" onClick={() => handleEdit(t.id)}>
                  Edit
                </button>
                <button className="del-btn" onClick={() => handleDelete(t.id)}>
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
