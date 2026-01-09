import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from './Dashboard';
import UnauthorizedPage from './UnauthorizedPage';
import UnifiedAsignatura from './asignaturas/UnifiedAsignatura';
import { useUserStore } from '../stores/userStore';
import MoocCoursePage from './MoocCoursePage';

const ProtectedUpnAssist: React.FC = () => {
  return (
    <Home>
      <Routes>
        <Route path="/" element={<Navigate to="/upnassist/mooc" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mooc" element={<MoocCoursePage />} />
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
        <Route path="*" element={<Navigate to="/upnassist/mooc" replace />} />
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