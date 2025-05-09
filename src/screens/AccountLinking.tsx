import React from 'react';
import { useTheme } from '../context/ThemeContext';

const AccountLinking = () => {
  const { theme, themeConfig } = useTheme();

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text}`}>
        Account Linking
      </h1>
    </div>
  );
};

export default AccountLinking;