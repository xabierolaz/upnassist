import React from 'react';
import Sidebar from './Sidebar';

interface HomeProps {
  children: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto relative bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Home;
