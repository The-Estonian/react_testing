import React, { Suspense, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import RootContainer from './components/RootContainer';
const HomePage = React.lazy(() => import('./pages/HomePage'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const CV = React.lazy(() => import("./pages/CV"))
const Login = React.lazy(() => import("./authentication/Login"))

import styles from'./App.module.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootContainer />}>
      <Route index element={<HomePage />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/cv' element={<CV />} />
      <Route path='/login' element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<p className={styles.centered}>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
