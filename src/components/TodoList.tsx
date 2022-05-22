import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredTodoListState } from "../recoil/atom";
import CreateItem from "./CreateItem";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStatus from "./TodoListStatus";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  console.log("todoList", todoList);

  return (
    <>
      <TodoListStatus />
      <TodoListFilters />
      <CreateItem />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
