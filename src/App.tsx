import React from "react";
import { useRecoilState } from "recoil";
import Count from "./components/Count";
import TextInput from "./components/TextInput";
import { textState } from "./recoil/atom";

const App = () => {
  return (
    <>
      <TextInput />
      <Count />
    </>
  );
};

export default App;
