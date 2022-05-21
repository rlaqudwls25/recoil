import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../recoil/atom";
import CreateItem from "./CreateItem";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  // console.log("todoList", todoList);
  return (
    <>
      <CreateItem />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
