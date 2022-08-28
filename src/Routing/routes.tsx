import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '@/pages/Home';
import Navigation from '@/components/Navigation';
import Blog from '@/pages/Blog';
import Projects from '@/pages/Projects';
// import your route components too

const Router = () => {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='Blog' element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;