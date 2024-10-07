import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h2>홈페이지</h2>
      <p>Next.j 페이지입니다</p>
      <Link href='/hello'>Hello</Link>
      <br />
      <Link href='/date'>Date</Link>
    </div>
  );
}
