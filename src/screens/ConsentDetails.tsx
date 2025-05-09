import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Button from '../components/Button';

const ConsentDetails = () => {
  const navigate = useNavigate();
  const { theme, themeConfig } = useTheme();

  const handleProceed = () => {
    navigate('/consent-confirmation');
  };

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <div className="max-w-2xl mx-auto">
        <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text} mb-8 text-center`}>
          Consent Details
        </h1>
        
        <Card className="space-y-6">
          <div>
            <h2 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h3} ${themeConfig.colors[theme].text} mb-4`}>
              Data Request Details
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Purpose</p>
                <p className={`${themeConfig.colors[theme].text}`}>Loan Application Assessment</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">Data Usage</p>
                <p className={`${themeConfig.colors[theme].text}`}>Your financial information will be used to assess your loan application</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400">Data Access Duration</p>
                <p className={`${themeConfig.colors[theme].text}`}>1 year</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h3} ${themeConfig.colors[theme].text} mb-4`}>
              Data Categories
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Account Information</li>
              <li>Transaction History</li>
              <li>Balance Details</li>
            </ul>
          </div>
          
          <Button onClick={handleProceed} fullWidth>
            Proceed
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ConsentDetails;