import React from "react";
import TodoCard from "../todoCard/TodoCard";
import { useSelector } from "react-redux";

const TodosList = () => {
  const { taskList, filter } = useSelector((state) => state.todosData.value);
  console.log(taskList);
  return (
    <div>
      {filter
        ? taskList.map((el) =>
            el.isDone ? null : (
              <div key={el.id}>
                <TodoCard task={el} />
              </div>
            )
          )
        : taskList.map((el) => (
            <div key={el.id}>
              <TodoCard task={el} />
            </div>
          ))}
    </div>
  );
};

export default TodosList;
