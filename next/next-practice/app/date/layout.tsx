import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h2>About Page Layout</h2>
      </header>
      <main>{children}</main>
    </div>
  );
}
