import { useState } from 'react';

export default function DecreaseCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count - 1)}>카운트 감소</button>
    </>
  );
}
