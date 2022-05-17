import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ToDo App</title>
        <meta
          name="description"
          content="ToDo App with Next.js and Material UI"
        />
      </Head>
      <Header />
    </div>
  );
}
