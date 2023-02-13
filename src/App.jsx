import { useState } from 'react';
import { Header } from './components/header/Header';
import { TodoList } from './components/todo-list/TodoList';
import {
  getAllListFromLocalStorage,
  removeListFromLocalStorage,
} from './utils/storage-util';

const App = () => {
  const todoPrefix = 'todo-list';
  const data = getAllListFromLocalStorage() || [];
  const [todosList, setTodosList] = useState(data);

  const onAddTodosList = () => {
    const newTodosId = todosList.length
      ? parseInt(todosList[todosList.length - 1].replace(/\D/g, '')) + 1
      : 1;
    todosList.push(`${todoPrefix}-${newTodosId}`);
    setTodosList([...todosList]);
  };

  const onDeleteList = (id) => {
    const index = todosList.indexOf(id);
    todosList.splice(index, 1);
    setTodosList([...todosList]);
    removeListFromLocalStorage(id);
  };

  return (
    <>
      <Header onAddTodosList={onAddTodosList} />
      <main>
        {todosList
          .filter((todosId) => todosId.includes(todoPrefix))
          .map((todosId) => (
            <TodoList key={todosId} id={todosId} onDeleteList={onDeleteList} />
          ))}
      </main>
    </>
  );
};

export default App;
