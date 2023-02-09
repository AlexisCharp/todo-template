import { useEffect, useState } from 'react';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/storage-util';
import { TodoAction } from '../todo-action';
import { TodoElement } from '../todo-element';
import './TodoList.css';

export const TodoList = ({ storageKey }) => {
  const data = loadFromLocalStorage(storageKey);
  const [todos, setTodos] = useState([...data]);

  useEffect(() => {
    saveToLocalStorage(storageKey, todos);
  }, [todos, storageKey]);

  const onAdd = (todoName) => {
    const newTodo = { name: todoName, isChecked: false };
    setTodos([newTodo, ...todos]);
    setTimeout(() => console.log({ todos }), 1000);
  };

  const onChange = (todo) => {
    todo.isChecked = !todo.isChecked;
    setTodos([...todos]);
  };

  const onDelete = (todo) => {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <div className="todo-list">
      <h2>Todo #1</h2>
      <TodoAction onSubmit={onAdd} />
      {todos &&
        todos.map((todo, index) => (
          <TodoElement
            key={index}
            id={index}
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};
