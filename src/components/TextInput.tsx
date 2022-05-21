import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../recoil/atom";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChangeInput = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onChangeInput} value={text} />
      Echo: {text}
    </div>
  );
};

export default TextInput;
