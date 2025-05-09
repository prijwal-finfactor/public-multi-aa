import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';
import Button from '../components/Button';
import OtpInput from 'react-otp-input';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const { theme, themeConfig } = useTheme();
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/select-fi-account');
  };

  return (
    <div className={`${themeConfig.spacing.section}`}>
      <div className="max-w-md mx-auto">
        <h1 className={`${themeConfig.fonts.heading} ${themeConfig.fontSize.h1} ${themeConfig.colors[theme].text} mb-8 text-center`}>
          Verify OTP
        </h1>
        
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <p className={`${themeConfig.colors[theme].text} text-center`}>
                Enter the OTP sent to your mobile number
              </p>
              
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
                containerStyle="gap-2"
                inputStyle={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                  fontSize: '1.25rem',
                  textAlign: 'center',
                }}
              />
            </div>
            
            <Button type="submit" fullWidth disabled={otp.length !== 6}>
              Verify OTP
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default VerifyOTP;