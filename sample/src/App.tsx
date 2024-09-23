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
import HandelIncrementChange from './component/HandelIncrementChange';
import Card from './component/Card';
import Box from './component/Box';

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
      <HandelIncrementChange />
      <Card title='Card'>
        <p>Card contentsasdsadas11ssssss</p>
      </Card>
      <Box>
        <h1>첫 번째 Box</h1>
        <p>이것은 첫 번째 Box의 내용입니다.</p>
      </Box>
      <Box>
        <h2>두 번째 Box</h2>
        <ul>
          <li>아이템 1</li>
          <li>아이템 2</li>
          <li>아이템 3</li>
        </ul>
      </Box>
    </>
  );
}

export default App;
