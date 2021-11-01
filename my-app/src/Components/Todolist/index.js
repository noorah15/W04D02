import React, { useState } from "react";
import TodoItem from "../TodoItem";

const Todo = () => {
  const [tasks, setTasks] = useState(["sleep", "programming", "walk"]);

  const addTask = (e) => {
    //alert(e.target.task.value);
    e.preventDefault();
    let str = e.target.task.value;
    if (str.length != 0) setTasks([...tasks, str]);
    else alert("Empty task");
  };
  return (
    <>
      <div className="todo">
        <form onSubmit={addTask}>
          <input type="text" name="task" />
          <button>Add task</button>
        </form>
        <ul>
          {tasks.map((item, i) => {
            return (
              <>
                <TodoItem
                  item={item}
                  index={i}
                  setTasks={setTasks}
                  tasks={tasks}
                />
              </>
            );
          })}
        </ul>

        <button
          onClick={() => {
            setTasks([]);
          }}
        >
          clear
        </button>
      </div>
    </>
  );
};
export default Todo;
