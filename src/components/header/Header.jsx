import { Button } from '../button/Button';
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import './Header.css';

export const Header = ({ onAddTodosList }) => {
  return (
    <header>
      <h1>Todo List</h1>
      <Button noPadding onClick={onAddTodosList}>
        <AddIcon />
      </Button>
    </header>
  );
};
