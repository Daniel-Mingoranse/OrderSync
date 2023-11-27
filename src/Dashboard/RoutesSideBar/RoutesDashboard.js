// RoutesDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blank from '../pages/Blank';
import CardDashboard from '../pages/ClientCards/ClientCards';
import Homedashboard from '../pages/HomeDashboard/HomeDashboard';
import AppLayout from '../UI/layout/AppLayout';
function RoutesDashboard() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homedashboard />} />
        <Route path='services' element={<CardDashboard />} />
        <Route path='calendar' element={<Blank />} />
        <Route path='user' element={<Blank />} />
        <Route path='order' element={<Blank />} />
      </Route>
    </Routes>
  );
}

export default RoutesDashboard;
