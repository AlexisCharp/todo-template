import { useState } from 'react';
import { TodoAction } from '../todo-action/TodoAction';
import { TodoElement } from '../todo-element/TodoElement';
import './TodoList.css';

export const TodoList = () => {
  const data = [
    {
      name: 'Acheter une corde',
      isChecked: true,
    },
    {
      name: 'Acheter un tabouret',
      isChecked: false,
    },
    {
      name: 'En finir',
      isChecked: false,
    },
  ];

  const [todos, setTodos] = useState(data);

  const onDelete = (todo) => {
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
      <h2>Todo #1</h2>
      <TodoAction />
      {todos.map((todo, index) => {
        return (
          <TodoElement
            key={index}
            id={index}
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};
