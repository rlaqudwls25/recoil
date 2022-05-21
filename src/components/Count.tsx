import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../recoil/atom";

const Count = () => {
  const count = useRecoilValue(charCountState);

  return <div>count : {count}</div>;
};

export default Count;
