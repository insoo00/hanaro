import React, { PropsWithChildren } from 'react';

interface CardProps {
  title: string;
}

export default function Card(props: PropsWithChildren<CardProps>): JSX.Element {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

// // 함수형 컴포넌트를 나타내는 타입
// const Card: React.FC<PropsWithChildren<CardProps>> = (
//   props: PropsWithChildren<CardProps>
// ) => {
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       {props.children}
//     </div>
//   );
// };

// export default Card;
