'use client'
import React from "react";

const AddTodo = (props:any) => {
  const handleChange = (event:any) =>{
    const value = event.target.value;
    console.log(value, "value add todo input");
    props.setNewTodo(value);
  }
  return (
    <>
      <div className="py-2">
        <input
          onChange={handleChange}
          placeholder="add todo"
          type="text"
          className="border-2 mr-2 p-1"
        />
        <button className="border-2 ml-2 p-1">Crear</button>
      </div>
    </>
  );
};

export default AddTodo;
