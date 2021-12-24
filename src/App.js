import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';

const App = () => {
  return (
    //Car app élément le plus haut
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='a-propos' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
