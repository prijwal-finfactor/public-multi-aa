import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { theme, toggleTheme, themeConfig } = useTheme();

  return (
    <nav className={`${themeConfig.colors[theme].background} border-b border-gray-200 dark:border-gray-700`}>
      <div className={themeConfig.spacing.container}>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className={`${themeConfig.fonts.heading} ${themeConfig.colors[theme].text}`}>
              Finsense
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-gray-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;