import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Button from '../components/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  const { theme, themeConfig } = useTheme();

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text} mb-8`}>
          Welcome to Finsense
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col gap-4">
            <h2 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h3} ${themeConfig.colors[theme].text}`}>
              Consent Flow
            </h2>
            <p className={`${themeConfig.colors[theme].text} opacity-80`}>
              Start the consent flow process to manage your financial data sharing permissions.
            </p>
            <Button 
              variant="primary"
              className="mt-auto"
              onClick={() => window.location.href = '/consent-flow'}
            >
              Start Consent Flow
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Card>

          <Card className="flex flex-col gap-4">
            <h2 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h3} ${themeConfig.colors[theme].text}`}>
              Account Linking
            </h2>
            <p className={`${themeConfig.colors[theme].text} opacity-80`}>
              Link your financial accounts to get started with our services.
            </p>
            <Button 
              variant="primary"
              className="mt-auto"
              onClick={() => window.location.href = '/account-linking'}
            >
              Link Accounts
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;