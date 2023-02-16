import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosAdd } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { Add, Filter } from "../../redux/slice";

const AddTask = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Math.random(), task: todo, isDone: false };
    todo.trim() === "" ? alert("Enter a valid text!!") : dispatch(Add(newTodo));
    setTodo("");
  };

  return (
    <div className="addInput">
      <form onSubmit={handleSubmit} action="" className="addForm">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="innput"
          placeholder="Give me a todo!"
        />
        <button type="submit" className="buttAdd">
          <IoIosAdd style={{ height: "25px", width: "25px", color: "white" }} />
        </button>
      </form>
      <button className="buttFilter" onClick={() => dispatch(Filter())}>
        <BsFilter style={{ height: "25px", width: "25px", color: "white" }} />
      </button>
    </div>
  );
};

export default AddTask;
