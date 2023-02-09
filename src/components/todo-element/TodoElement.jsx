import { Button } from '../button/Button';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';
import './TodoElement.css';

export const TodoElement = ({ id, todo, onChange, onDelete }) => {
  return (
    <div className="todo-element">
      <label className="todo-element__form" htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={todo.isChecked}
          onChange={() => onChange(todo)}
        />
        {todo.name}
      </label>
      <Button variant="danger" noPadding onClick={() => onDelete(todo)}>
        <DeleteIcon />
      </Button>
    </div>
  );
};
