import { Button } from '../button/Button';
import './TodoAction.css';

export const TodoAction = () => {
  return (
    <div className="todo-action">
      <p>Add a new task</p>
      <form className="todo-action__form">
        <label htmlFor="todo-action__input">
          <input
            id="todo-action__input"
            type="text"
            placeholder="Write some action"
          />
          <span className="sr-only">Todo name</span>
        </label>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};
