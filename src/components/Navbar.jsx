import React from 'react';
import { Layers, LogIn } from 'lucide-react';

export default function Navbar({ 
  currentRole, 
  setCurrentRole, 
  onOpenAuth, 
  user, 
  onLogout,
  backendOnline,
  activeTab,
  setActiveTab
}) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800/80 bg-gray-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Architecture Badge */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <div className="h-full w-full bg-gray-950 rounded-[10px] flex items-center justify-center">
                <Layers className="h-5 w-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  ERP<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-extrabold">System</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { id: 'overview', label: 'Dashboard' },
              { id: 'inventory', label: 'Inventory' },
              { id: 'orders', label: 'Sales Orders' },
              { id: 'architecture', label: 'System Roadmap' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Action: Backend Ping, Role Pill & Sign In */}
          <div className="flex items-center space-x-3">
            
            {/* Backend Connectivity Status */}
            {/* <div className="hidden xl:flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-gray-900 border border-gray-800 text-[11px]">
              <span className={`h-2 w-2 rounded-full ${backendOnline ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-gray-300">FastAPI:</span>
              <span className={backendOnline ? 'text-emerald-400 font-medium' : 'text-amber-400 font-medium'}>
                {backendOnline ? 'Online :8000' : 'Ready'}
              </span>
            </div> */}

            {/* Role Switcher Pill */}
            {/* <div className="flex items-center bg-gray-900/90 border border-gray-800 rounded-lg p-1">
              <span className="text-[10px] uppercase font-bold text-gray-400 px-2 hidden sm:inline">
                Role:
              </span>
              {(['Admin', 'Manager', 'Employee']).map((role) => (
                <button
                  key={role}
                  onClick={() => setCurrentRole(role)}
                  className={`px-2 py-0.5 rounded text-xs font-semibold transition-all ${
                    currentRole === role
                      ? role === 'Admin'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : role === 'Manager'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-amber-600 text-white shadow-sm'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  title={`Simulate system as ${role}`}
                >
                  {role}
                </button>
              ))}
            </div> */}

            {/* Auth Portal Trigger */}
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="hidden sm:block text-right">
                  <div className="text-xs font-semibold text-white truncate max-w-[120px]">{user.email}</div>
                  <div className="text-[10px] text-indigo-400 font-mono font-medium">JWT Authenticated</div>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="relative group overflow-hidden px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/30 flex items-center space-x-1.5 transition-all transform hover:-translate-y-0.5"
              >
                <LogIn className="h-3.5 w-3.5" />
                <span>Sign In</span>
              </button>
            )}

          </div>

        </div>
      </div>
    </header>
  );
}
