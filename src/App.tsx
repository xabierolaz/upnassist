import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MoocCoursePage from './pages/MoocCoursePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta única y principal: El MOOC */}
        <Route path="/" element={<MoocCoursePage />} />
        
        {/* Cualquier otra ruta redirige al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;