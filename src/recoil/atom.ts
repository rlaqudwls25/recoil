import { atom, selector } from "recoil";

// Atom은 state의 일부를 나타낸다.
// Atom은 어떤 컴포넌트에서나 읽고 쓸 수 있다.
// Atom을 구독하는 모든 컴포넌트들이 재 렌더링 된다.
export const textState = atom({
  key: "textState",
  default: "",
});

// Selector는 상태의 변화다.

export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
