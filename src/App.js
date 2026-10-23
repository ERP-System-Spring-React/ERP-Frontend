import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { INITIAL_PRODUCTS, INITIAL_ORDERS } from './data/mockData';

function App() {
  // Core ERP State
  const [products] = useState(INITIAL_PRODUCTS);
  const [orders] = useState(INITIAL_ORDERS);
  const [currentRole, setCurrentRole] = useState('Admin');
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [backendOnline, setBackendOnline] = useState(false);

  // Ping FastAPI backend on mount to check connectivity
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/', { method: 'GET' });
        if (res.ok) {
          setBackendOnline(true);
        }
      } catch (err) {
        // Backend might have CORS pending or still starting
        setBackendOnline(false);
      }
    };
    checkBackend();
    const interval = setInterval(checkBackend, 15000);
    return () => clearInterval(interval);
  }, []);

  // Handle successful login from AuthModal (REQ-1.1)
  const handleLoginSuccess = (userObj) => {
    setUser(userObj);
    setCurrentRole(userObj.role);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-gray-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white bg-grid-pattern">
      
      {/* Top Enterprise Header & Navigation */}
      <Navbar
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        user={user}
        onLogout={handleLogout}
        backendOnline={backendOnline}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onOpenAuth={() => setIsAuthModalOpen(true)}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            const el = document.getElementById('workbench');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          currentRole={currentRole}
        />

      </main>

      {/* Enterprise System Footer */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

    </div>
  );
}

export default App;
