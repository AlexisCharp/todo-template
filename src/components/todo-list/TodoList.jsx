import { useEffect, useState } from 'react';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/storage-util';
import { Button } from '../button/Button';
import { TodoAction } from '../todo-action/TodoAction';
import { TodoElement } from '../todo-element/TodoElement';
import './TodoList.css';

export const TodoList = ({ id, onDeleteList }) => {
  const data = loadFromLocalStorage(id) || [];
  const [todos, setTodos] = useState(data);

  const formatedId = id.replace(/\D/g, '');

  useEffect(() => {
    saveToLocalStorage(id, todos);
  }, [id, todos]);

  const onAdd = (todoName) => {
    const newTodo = { name: todoName, isChecked: false };
    setTodos([newTodo, ...todos]);
  };

  const onDeleteTask = (todo) => {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const onChange = (todo) => {
    todo.isChecked = !todo.isChecked;
    setTodos([...todos]);
  };

  return (
    <div className="todo-list">
      <h2>Todo #{formatedId}</h2>
      <TodoAction onSubmit={onAdd} />
      {todos.map((todo, index) => (
        <TodoElement
          key={index}
          id={`${formatedId}-${index}`}
          todo={todo}
          onChange={onChange}
          onDelete={onDeleteTask}
        />
      ))}
      <Button variant="danger" onClick={() => onDeleteList(id)}>
        Delete list
      </Button>
    </div>
  );
};
