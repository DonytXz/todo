import React from "react";
import { TodoItem } from "./table/TodoItem";
import Header from "./table/Header";
import { Todo } from "@/lib/types/Todo";

const Table = (props: any) => {
  const lastPostIndex: number = props.currentPage * props.postsPerPage;
  const firstPostIndex: number = lastPostIndex - props.postsPerPage;
  const todos: Array<Todo> = props.todos;
  const currentPosts: Array<Todo> =
    todos?.length > 0 ? todos?.slice(firstPostIndex, lastPostIndex) : [];
  const newTodos: Array<Todo> = props.newTodos;
  return (
    <>
      <div id="table">
        <Header />
        {newTodos?.map((todo: any, index: number) => {
          return (
            <TodoItem
              key={index}
              postsPerPage={props.postsPerPage}
              todo={todo}
            />
          );
        })}
        {currentPosts?.map((todo: any, index: number) => {
          return (
            <TodoItem
              key={index}
              postsPerPage={props.postsPerPage}
              todo={todo}
            />
          );
        })}
      </div>
    </>
  );
};

export default Table;
