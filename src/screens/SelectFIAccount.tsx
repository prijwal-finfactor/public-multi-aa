import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Button from '../components/Button';

const SelectFIAccount = () => {
  const navigate = useNavigate();
  const { theme, themeConfig } = useTheme();

  const banks = [
    { id: 'hdfc', name: 'HDFC Bank' },
    { id: 'sbi', name: 'State Bank of India' },
    { id: 'icici', name: 'ICICI Bank' },
    { id: 'axis', name: 'Axis Bank' },
  ];

  const handleSelectBank = (bankId: string) => {
    navigate('/consent-details');
  };

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <div className="max-w-xl mx-auto">
        <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text} mb-8 text-center`}>
          Select Bank Account
        </h1>
        
        <div className="space-y-4">
          {banks.map((bank) => (
            <Card key={bank.id} className="hover:shadow-lg transition-shadow">
              <Button
                variant="outline"
                fullWidth
                className="justify-between text-left"
                onClick={() => handleSelectBank(bank.id)}
              >
                <span>{bank.name}</span>
                <span>→</span>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectFIAccount;