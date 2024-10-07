import Link from "next/link";
import React from "react";

const HelloPage = () => {
  return (
    <div>
      <p>Hello 페이지입니다</p>
      <Link href='/hello'>go to home</Link>
    </div>
  );
};

export default HelloPage;
