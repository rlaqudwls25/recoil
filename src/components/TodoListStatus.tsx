import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatusState } from "../recoil/atom";

const TodoListStatus = () => {
  const { totalList, totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatusState);
  return (
    <ul>
      <li>Total items: {totalList}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
    </ul>
  );
};

export default TodoListStatus;
