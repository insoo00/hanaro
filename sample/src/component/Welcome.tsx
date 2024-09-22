import { useState } from 'react';

type person = {
  name: string;
};

export default function Welcome(props: person) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>안녕하세요, {props.name}!</h1>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </>
  );
}
