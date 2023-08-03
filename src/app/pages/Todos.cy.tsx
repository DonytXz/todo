import React from "react";
import Todos from "./Todos";
import Table from "../components/common/Table";
import AddTodo from "../components/common/AddTodo";
import Pagination from "../components/common/Pagination";
import { Todo } from "@/lib/types/Todo";

describe("<Todos />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Todos />);
  });
  it("show the table", () => {
    cy.mount(<Table />);
  });
  it("show the pagination", () => {
    cy.mount(<Pagination />);
  });
  it("show the add todo", () => {
    cy.mount(<AddTodo />);
  });
  it("fetch data", () => {
    const apiUrl: string = "https://jsonplaceholder.typicode.com/todos";
    cy.request(apiUrl).as("response");
    let todos: Array<Todo>;
    cy.get("@response").should((response: any) => {
      todos = response.body;
      expect(todos.length).to.eq(200);
    });
  });
});
