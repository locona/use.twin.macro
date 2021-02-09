import Link from "next/link";
import Layout from "../components/Layout";
import ReactCustomTextField from "design-system";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <ReactCustomTextField />
    {/* <Card title="hello">Hello world</Card> */}
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
