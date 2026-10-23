import React from 'react';
import { Layers, FileCode2, ExternalLink } from 'lucide-react';

export default function Footer({ onSelectTab, onOpenAuth }) {
  return (
    <footer className="mt-20 border-t border-gray-800/80 bg-gray-950 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Status */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Layers className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">ERP System</span>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
          <div>
            © 2026 ERP System. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
