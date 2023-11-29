import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import SignInSide from './Login/SignInSide';
import SignUp from './Register/SignUp';
import Error from './Error/Error';
import PasswordReset from './PasswordReset/PasswordReset';
import Loading from './LoadingPage/Loading';
import CardDashboard from './Dashboard/pages/ClientCards/ClientCards';
import AppLayout from './Dashboard/UI/layout/AppDefaultLayout';
import HomeDashboard from './Dashboard/pages/HomeDashboard/HomeDashboard'
import BudgetClient from './Dashboard/pages/BudgetClient/BudgetClient'
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      {/* Rotas páginas */}
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/error" element={<Error />} />
        <Route path="/" element={<App />} />
      </Routes>

      {/* Rotas do menu Dashboard no Sidebar Client */}
      <Routes>
        <Route path="/dashboard/*" element={<AppLayout />}>
          <Route index element={<HomeDashboard />} />
          <Route path="services" element={<CardDashboard />} />
          <Route path="pedidos" element={<BudgetClient />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
