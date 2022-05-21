import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atom";

const TodoItem = ({ item }: any) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  //   console.log("todoList", todoList);

  const updateTodo = ({ target: { value } }: any) => {
    setTodoList((todoList) => {
      const updateIndex = todoList.findIndex((list) => list.id === item.id);

      const updateList = [...todoList];

      updateList.splice(updateIndex, 1, {
        ...todoList[updateIndex],
        todo: value,
      });

      return updateList;
    });
  };

  const deleteTodo = () => {
    const index = todoList.findIndex((listItem) => listItem === item);

    const deleteList = [...todoList.slice(0, index)];

    setTodoList(deleteList);
  };

  return (
    <div>
      <input type="text" value={item.todo} onChange={updateTodo} />
      <input />
      <button onClick={deleteTodo}>삭제 버튼</button>
    </div>
  );
};

export default TodoItem;
