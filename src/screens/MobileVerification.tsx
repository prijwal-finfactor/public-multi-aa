import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

const MobileVerification = () => {
  const navigate = useNavigate();
  const { theme, themeConfig } = useTheme();
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify-otp');
  };

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <div className="max-w-md mx-auto">
        <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text} mb-8 text-center`}>
          Mobile Verification
        </h1>
        
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Mobile Number"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              required
              fullWidth
            />
            
            <Button type="submit" fullWidth>
              Send OTP
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default MobileVerification;