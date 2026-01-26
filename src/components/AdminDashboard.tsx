import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../core/firebase';

interface ActivityLog {
  email: string;
  timestamp: Timestamp;
  type: string;
}

interface UserStats {
  email: string;
  loginCount: number;
  lastLogin: Date | null;
  history: Date[];
}

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<UserStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'activity_logs'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const logs: ActivityLog[] = [];
      querySnapshot.forEach((doc) => {
        logs.push(doc.data() as ActivityLog);
      });

      // Group by user
      const userMap: Record<string, UserStats> = {};
      
      logs.forEach(log => {
        if (!userMap[log.email]) {
          userMap[log.email] = {
            email: log.email,
            loginCount: 0,
            lastLogin: null,
            history: []
          };
        }
        
        const date = log.timestamp?.toDate() || new Date();
        userMap[log.email].loginCount++;
        userMap[log.email].history.push(date);
        
        if (!userMap[log.email].lastLogin || date > userMap[log.email].lastLogin) {
          userMap[log.email].lastLogin = date;
        }
      });

      const statsArray = Object.values(userMap).sort((a, b) => b.loginCount - a.loginCount);
      setStats(statsArray);
      setLoading(false);
    } catch (err: any) {
      console.error("Error fetching logs:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-10 text-gray-500 font-mono text-sm animate-pulse">Consultando registros de actividad...</div>;
  if (error) return <div className="text-red-600 p-4 bg-red-50 rounded-xl border border-red-100">Error: {error}. Asegúrate de haber activado Firestore en la consola de Firebase.</div>;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h3 className="text-lg font-black text-gray-900 flex items-center">
          <span className="bg-red-600 w-2 h-5 rounded-full mr-3"></span>
          Actividad de Alumnos
        </h3>
        <button 
          onClick={fetchLogs}
          className="text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-widest bg-white px-3 py-1.5 rounded-lg border border-red-100 shadow-sm transition-all"
        >
          Refrescar
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Alumno</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Logins</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Último Acceso</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Historial Reciente</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {stats.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-gray-400 italic">No hay registros de actividad todavía.</td>
              </tr>
            ) : (
              stats.map((user) => (
                <tr key={user.email} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">{user.email.split('@')[0]}</div>
                    <div className="text-xs text-gray-400">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-100 text-blue-800">
                      {user.loginCount}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.lastLogin?.toLocaleString('es-ES', { 
                      day: '2-digit', 
                      month: 'short', 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {user.history.slice(0, 5).map((d, i) => (
                        <span key={i} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border border-gray-200">
                          {d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })}
                        </span>
                      ))}
                      {user.history.length > 5 && <span className="text-[10px] text-gray-400 self-center">...</span>}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
