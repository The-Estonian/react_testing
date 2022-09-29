import React from 'react';
import MainHeader from './components/MainHeader';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Pictures from './pages/Pictures';
import Contact from "./pages/Contact"

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/pictures' element={<Pictures />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
