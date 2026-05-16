import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VehicleListPage from './pages/VehicleListPage';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VehicleListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;