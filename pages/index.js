import Head from 'next/head';
import { useEffect } from 'react';
import Main from '../components/Main';
import TopBar from '../components/TopBar';
import { useAppContext } from '../context';

export default function Home() {
  const { open } = useAppContext();

  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Shivansh | Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <TopBar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}
