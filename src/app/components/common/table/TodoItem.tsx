import React from "react";
import Image from "next/image";
import { Todo } from "@/lib/types/Todo";

export const TodoItem = (props: any) => {
  const todo: Todo = props.todo;

  return (
    <>
      <div
        className={`grid grid-cols-8 border-2 mx-2 text-center ${
          todo.completed ? "" : "bg-gray-300"
        }`}
      >
        <div className="border-x-2 p-2">{todo.userId}</div>
        <div className="border-x-2 p-2">{todo.id}</div>
        <div className="border-x-2 p-2 col-span-5">{todo.title}</div>
        <div className="border-x-2 p-2 flex justify-center">
          {todo.completed ? (
            <div>
              <Image
                src="/icons/inc_checkmark.png"
                width={20}
                height={20}
                alt="Checkmark"
              />
            </div>
          ) : (
            <div>
              <Image
                src="/icons/inc_x.png"
                width={20}
                height={20}
                alt="Letter x"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
