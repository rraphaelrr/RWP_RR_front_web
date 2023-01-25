import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../pages/login/login';
import Dashboard from '../pages/pagesAdmin/dashboard';
import PrivateRoute from './privateRoute';

const logado = localStorage.getItem("logado")

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        if (logado) {
          <Route path="/dashboard" element={<Dashboard />} />
        } else {
          <Route path="/" element={<Login />} />
        }

      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;

