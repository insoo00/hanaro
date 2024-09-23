import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <Hello name='Insoo' age={26} increaseCount={increaseCount} />
      </div>
      <div className='card'>
        <button onClick={increaseCount}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
