import React from "react";
import Link from "next/link";
import "twin.macro";

const IndexPage = () => (
  <div>
    <h1 tw="p-4">Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
