import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>순마켓</title>
      </Head>
      <AppLayout>
        <Component></Component>
      </AppLayout>
    </>
  );
};

export default app;
