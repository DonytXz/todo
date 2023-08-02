"use client";
import React, { useEffect, useState } from "react";
import AddTodo from "../components/common/AddTodo";
import Table from "../components/common/Table";
import Pagination from "../components/common/Pagination";
import { getTodos } from "@/lib/api/Todos";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const getTodosValues = async () => {
    setTodos(await getTodos());
  };
  useEffect(() => {
    getTodosValues();
    console.log(todos, "todos on main page");
  }, []);

  return (
    <>
      <div className="flex flex-col py-10 px-8">
        <AddTodo setNewTodo={setNewTodo} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          length={todos.length}
          postsPerPage={postsPerPage}
        />
        <Table
          todos={todos}
          currentPage={currentPage}
          postsPerPage={postsPerPage}
        />
      </div>
    </>
  );
};

export default Todos;
