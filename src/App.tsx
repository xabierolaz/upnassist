import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UpnAssistApp from './pages/UpnAssistApp';
import MoocCoursePage from './pages/MoocCoursePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/upnassist/mooc" replace />} />
        <Route path="/upnassist/*" element={<UpnAssistApp />} />
        <Route path="/mooc" element={<MoocCoursePage />} />
        <Route path="*" element={<Navigate to="/upnassist/mooc" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
