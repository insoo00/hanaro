import React from 'react';

interface HelloProps {
  name: string;
  age: number;
  increaseCount: () => void;
}

export default function Hello(props: HelloProps) {
  return (
    <div className='hello-container'>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
      <button onClick={props.increaseCount}>Increase Count</button>
    </div>
  );
}
