"use client";
import React, { useEffect, useState } from "react";
import AddTodo from "../components/common/AddTodo";
import Table from "../components/common/Table";
import Pagination from "../components/common/Pagination";
import { getTodos } from "@/lib/api/Todos";
import { Todo } from "@/lib/types/Todo";

const Todos = () => {
  const [newTodos, setNewTodos] = useState<Array<Todo> | boolean>([]);
  const [todos, setTodos] = useState<Array<Todo> | Array<string>>([]);
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const [isLoadding, setIsLoadding] = useState<boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  const postsPerPage: number = 10;

  const getTodosValues = async () => {
    setIsLoadding(true);
    setError(false);
    const response: Array<Todo> | Array<string> = await getTodos();
    setTodos(response);
    if (response[0] != "Error") {
      setIsLoadding(false);
    } else {
      setIsLoadding(false);
      setError(true);
    }
  };

  const refreshValues = () => {
    getTodosValues();
  };

  useEffect(() => {
    getTodosValues();
  }, []);

  return (
    <>
      <div className="flex flex-col py-10 px-8">
        {error ? (
          <>
            <div className="flex flex-col">
              <div className="font-bold text-4xl m-auto">error</div>
              <button
                className="border-2 py-2 px-4 max-w-xs mx-auto mt-6 font-bold"
                onClick={refreshValues}
              >
                Refresh
              </button>
            </div>
          </>
        ) : (
          <>
            {isLoadding ? (
              <div className="font-bold text-4xl m-auto">Loadding</div>
            ) : (
              <>
                <AddTodo newTodos={newTodos} setNewTodos={setNewTodos} />
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  length={todos.length}
                  postsPerPage={postsPerPage}
                />
                <Table
                  todos={todos}
                  newTodos={newTodos}
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Todos;
