// RoutesDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';

function RoutesDashboard() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Blank />} />
        <Route path='/started' element={<Blank />} />
        <Route path='/calendar' element={<Blank />} />
        <Route path='/user' element={<Blank />} />
        <Route path='/order' element={<Blank />} />
      </Route>
    </Routes>
  );
}

export default RoutesDashboard;
