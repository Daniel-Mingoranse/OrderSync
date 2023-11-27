// RoutesDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../UI/layout/AppLayout';
import Blank from '../pages/Blank';
import CardDashboard from '../pages/ClientCards/ClientCards'
import { Card } from '@mui/material';

function RoutesDashboard() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={''} />
        <Route path='/services' element={<CardDashboard />} />
        <Route path='/calendar' element={<Blank />} />
        <Route path='/user' element={<Blank />} />
        <Route path='/order' element={<Blank />} />
      </Route>
    </Routes>
  );
}

export default RoutesDashboard;
