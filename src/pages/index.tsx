import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <HomeBlock>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <h1>Next.js + Typescript</h1>
      </div>
    </HomeBlock>
  );
};

export default Home;

const HomeBlock = styled.div`
  min-height: 100vh;
  padding: 0;
`;
