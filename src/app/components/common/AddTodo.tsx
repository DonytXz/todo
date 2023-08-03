"use client";
import React, { useState } from "react";
import { isEnterKey, isEmpty } from "@/lib/helpers/Inputs";

const AddTodo = (props: any) => {
  const [value, setValue] = useState("");
  const [empty, setEmpty] = useState(true);
  const [firstTime, setFirstTime] = useState(true);

  const onEnterKey = (event: any) => {
    const isEnter = isEnterKey(event.key);
    if (isEnter) setNewTodo();
  };

  const changeInput = (event: any) => {
    setValue(event.target.value);
    setEmpty(isEmpty(event.target.value.length));
  };

  const setNewTodo = () => {
    setFirstTime(false);
    const randomId = Math.floor(Math.random() * 5000);
    const randomUserId = Math.floor(Math.random() * 5000);
    if (!empty) {
      props.setNewTodos([
        ...props.newTodos,
        { userId: randomUserId, id: randomId, title: value, completed: false },
      ]);
      setValue("");
    }
  };

  return (
    <>
      <div className="py-2">
        <input
          value={value}
          onChange={changeInput}
          onKeyUp={onEnterKey}
          placeholder="add todo"
          type="text"
          className={`border-2 mr-2 py-2 px-4 border-gray-200 ${
            empty && !firstTime ? "border-red-500" : "border-gray-200"
          }`}
        />
        <button
          onClick={setNewTodo}
          className="border-2 ml-2 py-2 px-4 font-bold disabled:border-red-500 disabled:text-red-500"
          disabled={empty && !firstTime}
        >
          Crear
        </button>
      </div>
      {empty && !firstTime ? (
        <div className="text-red-500">Need to add a value first</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddTodo;
