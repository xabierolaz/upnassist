import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarItem {
  id: string;
  label: string;
  path?: string;
  active?: boolean;
}

interface SidebarProps {
  title: string;
  items: SidebarItem[];
  onItemClick?: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ title, items, onItemClick }) => {
  return (
    <div className="fixed top-0 left-0 h-full bg-white shadow-md z-50 flex flex-col font-sans" style={{ width: '324px' }}>
      {/* Brand */}
      <div className="p-6 pt-8 text-center">
        <h1 className="text-xl font-bold text-[#c0392b]">{title}</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-0">
        <ul className="list-none p-0 m-0">
          {items.map((item) => (
            <li key={item.id} className="mb-0">
              <button
                onClick={() => onItemClick?.(item.id)}
                className={`w-full text-left px-6 py-3 flex items-center transition-colors border-l-[0.5em] ${
                  item.active
                    ? 'bg-[#ffdfdf] border-[#f75b4b] text-black'
                    : 'bg-white border-white text-gray-800 hover:bg-[#f5ebeb] hover:border-[#f5ebeb]'
                }`}
              >
                <span className="flex-1 text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Logo (MOOC style) */}
      <div className="p-4 border-t border-gray-100 flex items-center justify-center">
        <span className="font-condensed font-bold text-lg tracking-tight">MOOC.fi</span>
      </div>
    </div>
  );
};
