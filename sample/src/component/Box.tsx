import React from 'react';

interface BoxProps {
  children: React.ReactNode;
}

export default function Box(props: BoxProps): JSX.Element {
  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', margin: '10px' }}>
      {props.children}
    </div>
  );
}
