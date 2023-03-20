import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { Container } from 'src/components/templates/Container';
import { TheHeader } from 'src/components/molecules/TheHeader';

type HomeProps = {
  sampleText: string;
};

const Home: NextPage<HomeProps> = ({ sampleText }: HomeProps) => {
  return (
    <>
      <Head>
        <title>tinvio serverless</title>
      </Head>
      <TheHeader />
      <Container>kek</Container>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const sampleText = 'Next.js TypeScript SCSS Template';
  return {
    props: {
      sampleText,
    },
    revalidate: 60,
  };
}
