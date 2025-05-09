import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Button from '../components/Button';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const Success = () => {
  const navigate = useNavigate();
  const { theme, themeConfig } = useTheme();

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <div className="max-w-xl mx-auto">
        <Card className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500" />
          </div>
          
          <div>
            <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h2} ${themeConfig.colors[theme].text} mb-2`}>
              Success!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Your financial information has been successfully shared through the Account Aggregator.
            </p>
          </div>
          
          <Button onClick={() => navigate('/')} fullWidth>
            Back to Home
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Success;