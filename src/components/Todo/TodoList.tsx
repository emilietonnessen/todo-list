import { useSelector } from 'react-redux';
import { ITodoList, selectTodoList } from '../../features/todoSlice';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todoList = useSelector(selectTodoList);

  console.log(todoList.length);

  return (
    <ul className="todo__list">
      {todoList.length < 1 && (
        <div className="todo__empty-list">Try adding something to the list</div>
      )}
      {todoList.map((item: ITodoList) => (
        <TodoListItem
          key={item.id}
          name={item.name}
          done={item.done}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
