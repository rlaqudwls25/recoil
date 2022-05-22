import { atom, selector } from "recoil";
export interface ITodoTypes {
  id: number;
  todo: string;
  isComplete: boolean;
}

export const todoListState = atom<ITodoTypes[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredeTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatusState = selector({
  key: "todoListStatusState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalList = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalList - totalCompletedNum;
    const percentCompleted =
      totalList === 0 ? 0 : totalCompletedNum / totalList;

    return {
      totalList,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
