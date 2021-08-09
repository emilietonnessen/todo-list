import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck, deleteTodo, ITodoList } from '../../features/todoSlice';
import { Trashcan } from '../UI/Icons';

const TodoListItem = ({ name, done, id }: ITodoList) => {
  const dispatch = useDispatch();

  const handleCheckbox = () => {
    dispatch(setCheck(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li className="todo__item">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheckbox}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p className={done ? 'todo__item--done' : undefined}>{name}</p>
      <span className="todo__trashcan" onClick={handleDelete}>
        <Trashcan />
      </span>
    </li>
  );
};

export default TodoListItem;
