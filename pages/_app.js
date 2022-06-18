import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';
import createWrapper from 'next-redux-wrapper';
import { legacy_createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';

const log = console.log;
const App = ({ Component }) => {
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

App.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default createWrapper((initState, options) => {
  log({
    initState,
    options,
  });
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)) : composeWithDevTools(applyMiddleware(...middlewares));
  const store = legacy_createStore(reducer, initState, enhancer);
  return store;
})(App);
