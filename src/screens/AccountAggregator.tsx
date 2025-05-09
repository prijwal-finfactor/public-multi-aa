import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';

const AccountAggregator = () => {
  const navigate = useNavigate();
  const { theme, themeConfig } = useTheme();

  React.useEffect(() => {
    // Simulate AA redirect completion
    const timeout = setTimeout(() => {
      navigate('/success');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <div className="max-w-xl mx-auto">
        <Card className="text-center">
          <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h2} ${themeConfig.colors[theme].text} mb-4`}>
            Redirecting to Account Aggregator
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we redirect you to your Account Aggregator app...
          </p>
          <div className="mt-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AccountAggregator;