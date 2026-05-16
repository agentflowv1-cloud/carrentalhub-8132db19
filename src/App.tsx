import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VehicleList from './pages/VehicleList';
import AdminDashboard from './pages/AdminDashboard';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VehicleList />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;