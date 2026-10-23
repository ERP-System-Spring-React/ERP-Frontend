import React from 'react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-16 bg-gradient-to-b from-gray-950 via-[#0B0F19] to-gray-950 border-b border-gray-800/80">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-indigo-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-12 right-10 w-96 h-96 bg-indigo-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Title & Value Proposition */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Welcome to  <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
              ERP System
            </span>
          </h1>
        </div>

      </div>
    </div>
  );
}
