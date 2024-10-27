import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Thanks from './Thanks';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/profile.page' element={<App />} />
        <Route path='/thanks' element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
