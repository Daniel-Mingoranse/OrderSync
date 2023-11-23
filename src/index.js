import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import SignInSide from './Login/SignInSide';
import SignUp from './Register/SignUp';
import Error from './Error/Error';
import PasswordReset from './PasswordReset/PasswordReset';
import Loading from './LoadingPage/Loading';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/error" element={<Error />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
