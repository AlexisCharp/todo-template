import { Button } from '../button';
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <h1>Todo List</h1>
      <Button noPadding>
        <AddIcon />
      </Button>
    </header>
  );
};
