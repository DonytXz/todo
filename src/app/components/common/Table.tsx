import React from "react";
import { TodoItem } from "./table/TodoItem";
import Header from "./table/Header";

const Table = (props: any) => {
  const lastPostIndex = props.currentPage * props.postsPerPage;
  const firstPostIndex = lastPostIndex - props.postsPerPage;
  const todos = props.todos;
  const currentPosts = todos.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div>
        <Header />
        {currentPosts.map((todo: any) => {
          return <TodoItem postsPerPage={props.postsPerPage} todo={todo} />;
        })}
      </div>
    </>
  );
};

export default Table;
