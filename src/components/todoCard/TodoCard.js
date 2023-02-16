import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FiEdit, FiSave } from "react-icons/fi";
import { Complete, Delete, editTodo } from "../../redux/slice";
const TodoCard = ({ task }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [etext, setEtext] = useState(task.task);
  const handleEdit = (e) => {
    e.preventDefault();
    const eTodo = { id: task.id, task: etext, isDone: task.isDone };
    etext.trim() === ""
      ? alert("don't leave it empty")
      : dispatch(editTodo(eTodo));
    setOpen(false);
  };
  return (
    <div className="todoCard">
      {open ? (
        <form action="" onSubmit={handleEdit} style={{ display: "flex" }}>
          <input
            style={{ width: "200px" }}
            value={etext}
            onChange={(e) => setEtext(e.target.value)}
          ></input>
          <button type="submit" className="Button">
            <FiSave style={{ height: "20px", width: "20px" }} />
          </button>
        </form>
      ) : (
        <h3 className={task.isDone ? "comp" : "uncomp"}> ❖ {task.task}</h3>
      )}

      <button
        style={
          task.isDone
            ? { backgroundColor: "white" }
            : { backgroundColor: "black", color: "white" }
        }
        onClick={() => dispatch(Complete(task.id))}
        className="Button"
      >
        {task.isDone ? "Undo" : "Complete"}
      </button>
      <button
        style={{ backgroundColor: "white", color: "red" }}
        onClick={() => dispatch(Delete(task.id))}
        className="Button"
      >
        <MdDelete style={{ height: "20px", width: "20px" }} />
      </button>
      <button
        style={{
          backgroundColor: "white",
          color: "blue",
        }}
        className="Button"
        onClick={() => setOpen(true)}
      >
        <FiEdit style={{ height: "20px", width: "20px" }} />
      </button>
    </div>
  );
};

export default TodoCard;
