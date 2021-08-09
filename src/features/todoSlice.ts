import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface IStateTodo {
  todoList: ITodoList[];
}

export interface ITodoList {
  name: string;
  done: boolean;
  id: number;
}

const initialState: IStateTodo = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action: PayloadAction<ITodoList>) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action: PayloadAction<number>) => {
      state.todoList.forEach((item: ITodoList) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.todoList = state.todoList.filter(
        (item: ITodoList) => item.id !== id
      );
    },
  },
});

export const { saveTodo, setCheck, deleteTodo } = todoSlice.actions;
export const selectTodoList = (state: RootState) => state.todos.todoList;
export default todoSlice.reducer;
