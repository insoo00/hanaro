import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Welcome from './component/Welcome';
import DecreaseCounter from './component/DecreaseCounter';
import Checkbox from './component/Checkbox';
import TextInput from './component/TextInput';
import TodoList from './component/TodoList';
import ChangeTheme from './component/ChangeTheme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Welcome name='이인수' />
      <DecreaseCounter />
      <Checkbox />
      <TextInput />
      <TodoList />
      <ChangeTheme />
    </>
  );
}

export default App;
