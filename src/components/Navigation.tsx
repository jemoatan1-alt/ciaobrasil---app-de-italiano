
import React from 'react';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

const Navigation: React.FC<Props> = ({ activeTab, setActiveTab, onLogout, isLoggedIn }) => {
  return (
    <nav className="w-64 bg-white dark:bg-slate-900 p-4 border-r border-gray-200 dark:border-slate-800">
      <ul className="space-y-2">
        <li><button onClick={() => setActiveTab('landing')} className="block w-full text-left">Landing</button></li>
        <li><button onClick={() => setActiveTab('learn')} className="block w-full text-left">Lezioni</button></li>
        <li><button onClick={() => setActiveTab('chat')} className="block w-full text-left">Chat</button></li>
        <li><button onClick={() => setActiveTab('dict')} className="block w-full text-left">Dizionario</button></li>
        <li><button onClick={() => setActiveTab('voice')} className="block w-full text-left">Voice</button></li>
        <li><button onClick={() => setActiveTab('stats')} className="block w-full text-left">Stats</button></li>
        {isLoggedIn && <li><button onClick={onLogout} className="block w-full text-left">Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navigation;