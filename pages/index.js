import Head from 'next/head';
import Dashboard from 'components/Dashboard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Freelance Dance Social Image Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  );
}
