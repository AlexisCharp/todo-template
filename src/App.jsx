import { Header } from './components/header/';
import { TodoList } from './components/todo-list';

const App = () => {
  const STORAGE_KEY = 'todo-list';

  return (
    <>
      <Header />
      <main>
        <TodoList storageKey={STORAGE_KEY} />
      </main>
    </>
  );
};

export default App;
