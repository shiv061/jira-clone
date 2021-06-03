import Head from 'next/head';
import { useEffect, useState } from 'react';
import Main from '../components/Main';
import TopBar from '../components/TopBar';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  if (windowWidth < 600) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <h1>Not Available</h1>
      </div>
    );
  }

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
