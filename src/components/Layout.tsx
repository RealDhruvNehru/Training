import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, Quote } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              <BookOpen className="w-6 h-6" />
              <span>Coforge Training Chronicle</span>
            </Link>
            
            <div className="flex space-x-6">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/quotes"
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/quotes') 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Quote className="w-4 h-4" />
                <span>Quotes</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-slate-400">
          <p>&copy; 2025 Coforge Training Chronicle. Building excellence through continuous learning.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;