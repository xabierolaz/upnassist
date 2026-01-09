import React from 'react';
import { Link } from 'react-router-dom';

export const TopBar: React.FC = () => {
  return (
    <div className="h-16 w-full flex justify-end items-center px-4 bg-transparent">
      <div className="flex gap-2">
        <Link 
          to="/profile" 
          className="px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          My Profile
        </Link>
        <button 
          className="px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          Log out
        </button>
      </div>
    </div>
  );
};
