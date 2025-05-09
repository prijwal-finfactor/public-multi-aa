import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const { theme, themeConfig } = useTheme();

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text}`}>
        Dashboard
      </h1>
    </div>
  );
};

export default Dashboard;