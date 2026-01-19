
import React from 'react';
import { AppMode } from '../types';

interface SidebarProps {
  activeMode: AppMode;
  onModeChange: (mode: AppMode) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMode, onModeChange }) => {
  const menuItems = [
    { id: AppMode.MAINTENANCE, icon: 'fa-building', label: 'Site Vitrine' },
    { id: AppMode.CHAT, icon: 'fa-comments', label: 'Assistant IA' },
    { id: AppMode.IMAGE, icon: 'fa-image', label: 'Générateur Image' },
    { id: AppMode.SPEECH, icon: 'fa-microphone', label: 'Voix IA' },
  ];

  return (
    <aside className="w-20 md:w-64 bg-slate-900 text-white flex flex-col transition-all duration-300 z-20">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <i className="fas fa-bolt text-amber-400 text-2xl mr-3"></i>
        <span className="font-bold text-xl hidden md:block">GM Studio</span>
      </div>
      <nav className="flex-1 py-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onModeChange(item.id)}
            className={`w-full flex items-center px-6 py-3 transition-colors ${
              activeMode === item.id 
                ? 'bg-amber-500 text-white' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <i className={`fas ${item.icon} text-lg w-8`}></i>
            <span className="hidden md:block font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800 hidden md:block">
        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Propulsé par Gemini</p>
      </div>
    </aside>
  );
};

export default Sidebar;
