import { ITodo } from "../types";
import { useState } from "react";
interface ITodoList {
  todos: ITodo[];
  onDelete: (id: any) => void;
  onClick?: () => void;
  updatetodo?: (id: any) => void;
  setEditIndex?: (id: any) => void;
  handleStrike?: (n: Number, t: string) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, onDelete }) => {
  const [editIndex, setEditIndex] = useState();
  const [editText, setEditText] = useState("");

  // function onDelete(id: any) {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  //   console.log(updatedTodos);

  //   return updatedTodos;
  // }
  function handleCheck(e: React.ChangeEvent<HTMLInputElement>, id: Number) {
    if (e.target.checked) {
      console.log(id, "done");
    } else {
      console.log(id, "undone");
    }
  }

  const updatetodo = (id: any) => {
    if (editText !== "") {
      const updatedtodos = todos.map((t) =>
        t.id === id ? { ...t, text: editText } : t
      );

      //  todos.setTodo(updatedtodos);
      console.log(updatedtodos);
      // setEditIndex();
      // setEditText("");
    }
  };
  return (
    <div>
      <h2>Todo lists</h2>
      {todos.map((t) => (
        <div key={t.id.toString()}>
          {/* <label>
            <input type="checkbox" checked={t.isdone} />
          </label> */}
          {/* {t.text} */}
        </div>
      ))}
      <div>
        {todos.map((t) => (
          <div key={t.id}>
            {editIndex === t.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => updatetodo(t.id)} className="update-btn">
                  Update
                </button>
                <button
                  onClick={() => setEditIndex(t.id)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={t.isdone}
                    onChange={(e) => handleCheck(e, t.id)}
                  />
                  <p
                    style={{
                      textDecoration: t.isdone ? "line-through" : undefined,
                    }}
                  >
                    {t.text}
                  </p>{" "}
                </label>
                <button onClick={() => setEditIndex(t.id)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => onDelete(t.id)}>delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

/* <label
style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
>
<input type="checkbox" checked={todo.complete} /> {todo.text}
</label> */
// }
// import React, { useState, useEffect } from "react";
// import CustomInput from "./Input";

// const LikeApp = () => {
//   const initialtodos = JSON.parse(localStorage.getItem("likes"));
//   const [likes, setlikes] = useState(initiallikes);
//   const [text, setText] = useState("");
//   const [editIndex, setEditIndex] = useState();
//   const [editText, setEditText] = useState("");

//   useEffect(() => {
//     localStorage.setItem("likes", JSON.stringify(likes));
//   });

//   const addlike = () => {
//     {
//       const newlike = {
//         id: new Date().getTime(),
//         text: text,
//       };
//       setlikes([...likes, newlike]);
//       setText("");
//     }
//   };

//   const updatelike = (id) => {
//     if (editText !== "") {
//       const updatedlikes = likes.map((like) =>
//         like.id === id ? { ...like, text: editText } : like
//       );

//       setlikes(updatedlikes);
//       setEditIndex();
//       setEditText("");
//     }
//   };

//   const deletelike = (id) => {
//     const updatedlikes = likes.filter((like) => like.id !== id);
//     setlikes(updatedlikes);
//   };
//   function onchange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <div className="mainDiv">
//       <h1>Like App</h1>
//       <CustomInput
//         placeholder={"Enter the likes here"}
//         title={"Likes"}
//         onchange={onchange}
//         value={text}
//         name={"color"}
//         type={"text"}
//         className={"Addinput"}
//       />
//       <button onClick={addlike} className="addbtn">
//         Add
//       </button>
//       <div className="returnDiv">
//         <ul>
//           {likes.map((like) => (
//             <li key={like.id}>
//               {editIndex === like.id ? (
//                 <div>
//                   <input
//                     type="text"
//                     value={editText}
//                     onChange={(e) => setEditText(e.target.value)}
//                   />
//                   <button
//                     onClick={() => updatelike(like.id)}
//                     className="update-btn"
//                   >
//                     Update
//                   </button>
//                   <button onClick={() => setEditIndex()} className="cancel-btn">
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <div>
//                   <p>{like.text}</p>
//                   <button
//                     onClick={() => setEditIndex(like.id)}
//                     className="edit-btn"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deletelike(like.id)}
//                     className="del-btn"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default LikeApp;
