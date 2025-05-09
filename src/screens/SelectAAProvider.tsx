import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Button from '../components/Button';

const SelectAAProvider = () => {
  const navigate = useNavigate();
  const { theme, themeConfig } = useTheme();

  const providers = [
    { id: 'finvu', name: 'Finvu AA' },
    { id: 'anumati', name: 'Anumati AA' },
  ];

  const handleSelectProvider = (providerId: string) => {
    // Here you would typically store the selected provider in your state management
    navigate('/mobile-verification');
  };

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <div className="max-w-xl mx-auto">
        <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text} mb-8 text-center`}>
          Select Account Aggregator
        </h1>
        
        <div className="space-y-4">
          {providers.map((provider) => (
            <Card key={provider.id} className="hover:shadow-lg transition-shadow">
              <Button
                variant="outline"
                fullWidth
                className="justify-between text-left"
                onClick={() => handleSelectProvider(provider.id)}
              >
                <span>{provider.name}</span>
                <span>→</span>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectAAProvider;