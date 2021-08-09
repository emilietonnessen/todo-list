import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../features/todoSlice';

const TodoInput = () => {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        name: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="todo__input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" className="todo__input-button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
