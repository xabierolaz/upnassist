import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CourseShell } from './core/ui/CourseShell';
import { HomePage } from './pages/HomePage';
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

// Map calendar entries to Units grouped by Week
const weeks = [...new Set(dsManifest.calendar.map(e => e.week))].sort((a, b) => a - b);
for (const week of weeks) {
    const events = dsManifest.calendar.filter(e => e.week === week);
    
    const units = events.map(e => {
        const dateStr = e.date; // e.g. "Feb 02"
        
        // Helper to format localized title with date
        const getUnitTitle = (lang: 'ENG' | 'CAS' | 'EUS') => {
            const topic = typeof e.topic === 'string' ? e.topic : (e.topic as any)[lang];
            return `${topic} (${dateStr})`;
        };

        // Determine ID (matching loader expectations)
        let unitId = `ds-w${week.toString().padStart(2, '0')}-${e.type.toLowerCase().replace('/', '-')}`;
        
        // Override for existing content IDs in Week 2
        if (week === 2 && e.type === 'Theory') unitId = 'ds-w02-intro';
        if (week === 2 && e.type === 'Lab') unitId = 'ds-w02-sparse';

        return {
            id: unitId,
            title: {
                ENG: getUnitTitle('ENG'),
                CAS: getUnitTitle('CAS'),
                EUS: getUnitTitle('EUS')
            }
        };
    });

    const moduleTitle = (dsManifest as any).moduleTitles?.[week] || { 
        ENG: `Week ${week}`, 
        CAS: `Semana ${week}`, 
        EUS: `Astea ${week}` 
    };

    dsCourse.modules.push({
        id: `week${week}`,
        title: moduleTitle,
        units: units
    });
}


function App() {
  return (
    <Router>
      <Routes>
        {/* Course Routes */}
        <Route path="/course/mooc/:unitId?" element={<CourseShell courseManifest={moocCourse as any} />} />
        <Route path="/course/ds/:unitId?" element={<CourseShell courseManifest={dsCourse as any} />} />
        
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Redirects */}
        <Route path="/estructura-datos" element={<Navigate to="/course/ds/ds-w02-intro" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
