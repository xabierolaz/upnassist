import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from './Dashboard';
import TestPyXom from './TestPyXom';
import UnifiedAsignatura from './asignaturas/UnifiedAsignatura';

const ProtectedUpnAssist: React.FC = () => {
  return (
    <Home>
      <Routes>
        <Route path="/" element={<Navigate to="/upnassist/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pyxom" element={<TestPyXom />} />
        <Route path="/asignatura/:codigo" element={
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          }>
            <UnifiedAsignatura />
          </Suspense>
        } />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/upnassist/dashboard" replace />} />
      </Routes>
    </Home>
  );
};

const UpnAssistApp: React.FC = () => {
  return (
    <ProtectedUpnAssist />
  );
};

export default UpnAssistApp;