import React, { useState } from "react";

const TodoItem = (props) => {
  const remove = (e) => {
    let index = e.target.getAttribute("id");
    const t = props.tasks.filter((item, i) => {
      return index != i;
    });
    props.setTasks(t);
  };
  return (
    <>
      <li key={props.index}> {props.item} </li>
      <button onClick={remove} key={props.index} id={props.index}>
        X
      </button>
    </>
  );
};
export default TodoItem;
