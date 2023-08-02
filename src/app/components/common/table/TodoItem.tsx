import React from "react";

export const TodoItem = (props: any) => {
  const todo = props.todo;
  return (
    <>
      <div className="grid grid-cols-4 border-2 mx-2">
        <div className="border-x-2 p-2">{todo.userId}</div>
        <div className="border-x-2 p-2">{todo.id}</div>
        <div className="border-x-2 p-2">{todo.title}</div>
        <div className="border-x-2 p-2">{todo.completed ? "Y" : "X"}</div>
      </div>
    </>
  );
};
