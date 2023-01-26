import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '@/Modules/Home';
import Navigation from '@/Modules/Common/components/Navigation';
import Blog from '@/Modules/Blog';
import Projects from '@/Modules/Projects';
import styled from '@emotion/styled';
import { Button, Container } from '@mui/material';


const StyledBackgroundColor = styled.div`
  background-color: #1410b0;
  margin: 0;
  padding: 0;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
