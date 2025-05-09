import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ConsentFlow = () => {
  const { theme, themeConfig } = useTheme();

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text}`}>
        Consent Flow
      </h1>
    </div>
  );
};

export default ConsentFlow;