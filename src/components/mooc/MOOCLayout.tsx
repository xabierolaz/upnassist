import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface MOOCLayoutProps {
  children: React.ReactNode;
  sidebarTitle: string;
  sidebarItems: any[];
  onSidebarItemClick: (id: string) => void;
}

export const MOOCLayout: React.FC<MOOCLayoutProps> = ({ 
  children, 
  sidebarTitle, 
  sidebarItems, 
  onSidebarItemClick 
}) => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#212529]">
      {/* Sidebar - Desktop Only for now */}
      <div className="hidden lg:block">
        <Sidebar 
          title={sidebarTitle} 
          items={sidebarItems} 
          onItemClick={onSidebarItemClick} 
        />
      </div>

      {/* Main Content Push */}
      <div className="lg:ml-[324px] min-h-screen flex flex-col">
        <TopBar />
        
        <main className="flex-1 px-4 pb-20">
          <div className="max-w-[800px] mx-auto bg-transparent">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
