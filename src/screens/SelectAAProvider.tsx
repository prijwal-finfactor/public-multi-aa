import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Button from '../components/Button';

const SelectAAProvider = () => {
  const navigate = useNavigate();
  const { theme, themeConfig } = useTheme();

  const providers = [
    { id: 'anumati', name: 'Anumati AA', logo: 'anumati-logo.png' },
    { id: 'finvu', name: 'Finvu AA', logo: 'finvu-logo.png' },
  ];

  const handleSelectProvider = (providerId: string) => {
    navigate('/mobile-verification');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-4">
        <div className="flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="p-2">
            ←
          </button>
          <div className="flex-1 flex justify-between items-center">
            <h1 className="text-lg font-semibold">LendNow!</h1>
            <div className="flex items-center gap-4">
              <button>🔊</button>
              <button>Aa/अ</button>
              <button>✕</button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Register</span>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">Step 1 of 3</span>
              <button className="text-sm text-gray-600">ⓘ</button>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full w-1/3 bg-purple-600 rounded-full"></div>
          </div>
        </div>

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

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">10 Million+ users have used Account Aggregators (AAs)!</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Supported by:</span>
            <div className="flex items-center gap-1">
              {/* Bank logos would go here */}
              <span>+ 30 others</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          Secured data sharing by RBI-Regulated AA
        </div>
      </div>
    </div>
  );
};

export default SelectAAProvider;