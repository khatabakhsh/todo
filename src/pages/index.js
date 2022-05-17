import Head from 'next/head';
import Header from '../components/Header';
import TodoApp from '../components/TodoApp';

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
      <TodoApp />
    </div>
  );
}
