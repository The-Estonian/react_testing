import React, { Suspense } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import RootContainer from './components/RootContainer';
const HomePage = React.lazy(() => import('./pages/HomePage'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
// import HomePage from './pages/HomePage';
// import Skills from './pages/Skills';
// import Portfolio from './pages/Portfolio';
// import Contacts from './pages/Contacts';

import './App.module.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootContainer />}>
      <Route index element={<HomePage />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contacts' element={<Contacts />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
