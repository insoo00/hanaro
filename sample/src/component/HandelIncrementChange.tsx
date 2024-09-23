import { useState } from 'react';

export default function HandelIncrementChange() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const increaseCount = () => {
    setCount(count + increment);
  };

  const handleIncrementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncrement(Number(e.target.value));
  };

  return (
    <div>
      <h2>현재 카운트: {count}</h2>
      <input
        type='number'
        value={increment}
        onChange={handleIncrementChange}
        placeholder='증가할 값을 입력하세요'
      />
      <button onClick={increaseCount}>증가</button>
    </div>
  );
}
