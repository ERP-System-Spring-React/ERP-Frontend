import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);

  const handleOpenAuth = () => {
    // Auth modal / action handler for REQ-1.1
    console.log('Open Auth');
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-gray-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white bg-grid-pattern">
      <Navbar
        user={user}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;
