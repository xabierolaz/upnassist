import { useState, useEffect, useCallback } from 'react';
import { collection, query, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../core/firebase';

export interface ActivityLog {
  email: string;
  timestamp: Timestamp;
  type: string;
}

export interface UserStats {
  email: string;
  loginCount: number;
  lastLogin: Date | null;
  history: Date[];
}

export const useAdminStats = () => {
  const [stats, setStats] = useState<UserStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLogs = useCallback(async () => {
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
        
        const lastLogin = userMap[log.email].lastLogin;
        if (!lastLogin || date > lastLogin) {
          userMap[log.email].lastLogin = date;
        }
      });

      const statsArray = Object.values(userMap).sort((a, b) => b.loginCount - a.loginCount);
      setStats(statsArray);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching logs:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  return { stats, loading, error, refresh: fetchLogs };
};
