import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentInterface from './components/StudentInterface';
import SearchBar from './components/SearchBar';
import { ChevronDown  } from 'lucide-react';

// Layout component for consistent page structure
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation Header */}
      <nav className="shadow-sm py-4">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              {/* Search Bar */}
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search"
              />
            </div>
            {/* User Profile Section */}
            <div className="flex items-center">
              <div className="relative">
                <button className="flex items-center space-x-2 text-sm focus:outline-none">
                  <img
                    src="https://images.pexels.com/photos/20439186/pexels-photo-20439186/free-photo-of-woman-in-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Profile"
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                  <span className="text-gray-700">Alina</span>
                  <ChevronDown className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-full mx-auto sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Student Management System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Define the routes configuration
interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <StudentInterface />
  },
];

// Main App component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-green-200/20 to-white">
      <Router>
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;