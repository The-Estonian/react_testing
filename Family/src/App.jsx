import React, { Suspense } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import RootContainer from './components/RootContainer';
import HomePage from './pages/HomePage';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import CV from './pages/CV';
import Login from './authentication/Login';

import styles from './App.module.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootContainer />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route index element={<Navigate to='/cv' />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/cv' />} />
      </Route>
    )
  );
  return (
    <Suspense fallback={<p className={styles.centered}>Loading...</p>}>
        <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
