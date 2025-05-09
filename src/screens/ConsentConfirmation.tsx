import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Button from '../components/Button';

const ConsentConfirmation = () => {
  const navigate = useNavigate();
  const { theme, themeConfig } = useTheme();

  const handleConfirm = () => {
    navigate('/account-aggregator');
  };

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <div className="max-w-xl mx-auto">
        <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text} mb-8 text-center`}>
          Confirm Consent
        </h1>
        
        <Card className="space-y-6">
          <div className="text-center">
            <p className={`${themeConfig.colors[theme].text} mb-4`}>
              By proceeding, you agree to share your financial information as specified in the consent details.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You can revoke this consent at any time through your Account Aggregator app.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button onClick={handleConfirm} fullWidth>
              Confirm & Proceed
            </Button>
            <Button variant="outline" onClick={() => navigate(-1)} fullWidth>
              Go Back
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ConsentConfirmation;