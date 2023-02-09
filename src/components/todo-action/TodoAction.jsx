import { useRef } from 'react';
import { Button } from '../button';
import './TodoAction.css';

export const TodoAction = ({ onSubmit }) => {
  const addTask = (e) => {
    e.preventDefault();
    if (!input.current.value.trim()) return;
    onSubmit(input.current.value);
    input.current.value = '';
  };

  const input = useRef();

  return (
    <div className="todo-action">
      <p>Add a new task</p>
      <form className="todo-action__form" onSubmit={(e) => addTask(e)}>
        <label htmlFor="todo-action__input">
          <input
            id="todo-action__input"
            type="text"
            placeholder="Write some actions"
            ref={input}
          />
          <span className="sr-only">Todo name</span>
        </label>
        <Button type="submit" aria-label="Add a todo">
          Add
        </Button>
      </form>
    </div>
  );
};
