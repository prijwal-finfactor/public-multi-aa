import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const { theme, themeConfig } = useTheme();
  
  return (
    <div className={`min-h-screen ${themeConfig.colors[theme].background}`}>
      <Navbar />
      <main className={themeConfig.spacing.container}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;