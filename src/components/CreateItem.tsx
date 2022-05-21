import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atom";

let id = 0;

const getId = () => {
  return id++;
};

const CreateItem = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const onCreateItem = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: getId(),
        todo: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue("");
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChangeValue} />
      <button onClick={onCreateItem}>추가 버튼</button>
    </div>
  );
};

export default CreateItem;
