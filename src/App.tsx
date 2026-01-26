import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CourseShell } from './core/ui/CourseShell';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { useAuthStore } from './stores/authStore';
import { courseStructureMetadata as moocManifest } from './courses/mooc/manifest';
import { syllabusData as dsManifest } from './courses/ds/manifest';
import './App.css';

// --- MOOC Course Definition ---
const moocCourse = {
    id: 'mooc',
    title: { ENG: 'Python Programming Course', CAS: 'Curso de Programación Python', EUS: 'Python Programazio Ikastaroa' },
    modules: [] as any[]
};

const parts = new Set(moocManifest.map(s => s.part));
for (const part of parts) {
    const sections = moocManifest.filter(s => s.part === part);
    moocCourse.modules.push({
        id: `part${part}`,
        title: { ENG: `Part ${part}`, CAS: `Parte ${part}`, EUS: `${part}. Zatia` },
        units: sections.map(s => ({
            id: s.id,
            title: s.title
        }))
    });
}

// --- Data Structures Course Definition ---
const dsCourse = {
    id: 'ds',
    title: dsManifest.courseName,
    modules: [] as any[]
};

const weeks = [...new Set(dsManifest.calendar.map(e => e.week))].sort((a, b) => a - b);
for (const week of weeks) {
    const events = dsManifest.calendar.filter(e => e.week === week);
    const units = events.map(e => {
        const dateStr = e.date;
        const getUnitTitle = (lang: 'ENG' | 'CAS' | 'EUS') => {
            const topic = typeof e.topic === 'string' ? e.topic : (e.topic as any)[lang];
            return `${topic} (${dateStr})`;
        };
        let unitId = `ds-w${week.toString().padStart(2, '0')}-${e.type.toLowerCase().replace('/', '-')}`;
        if (week === 2 && e.type === 'Theory') unitId = 'ds-w02-intro';
        if (week === 2 && e.type === 'Lab') unitId = 'ds-w02-sparse';
        return {
            id: unitId,
            title: { ENG: getUnitTitle('ENG'), CAS: getUnitTitle('CAS'), EUS: getUnitTitle('EUS') }
        };
    });
    const moduleTitle = (dsManifest as any).moduleTitles?.[week] || { ENG: `Week ${week}`, CAS: `Semana ${week}`, EUS: `Astea ${week}` };
    dsCourse.modules.push({ id: `week${week}`, title: moduleTitle, units: units });
}

// --- Protected Route Component ---
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isInitialized } = useAuthStore();
  
  if (!isInitialized) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 font-mono text-sm">Cargando acceso seguro...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  const { initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Course Routes */}
        <Route path="/course/mooc/:unitId?" element={
          <ProtectedRoute>
            <CourseShell courseManifest={moocCourse as any} />
          </ProtectedRoute>
        } />
        <Route path="/course/ds/:unitId?" element={
          <ProtectedRoute>
            <CourseShell courseManifest={dsCourse as any} />
          </ProtectedRoute>
        } />
        
        {/* Protected Home Route */}
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        
        {/* Redirects */}
        <Route path="/estructura-datos" element={<Navigate to="/course/ds/ds-w02-intro" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;