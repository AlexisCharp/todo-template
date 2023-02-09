import { Button } from '../button';
import './TodoElement.css';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';

export const TodoElement = ({ id, todo, onChange, onDelete }) => {
  const todoId = `todo-${id}`;

  return (
    <div className="todo-element">
      <label className="todo-element__form" htmlFor={todoId}>
        <input
          id={todoId}
          checked={todo.isChecked}
          type="checkbox"
          onChange={() => onChange(todo)}
        />
        {todo.name}
      </label>
      <Button
        aria-label="Delete task"
        variant="danger"
        noPadding
        onClick={() => onDelete(todo)}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
};
