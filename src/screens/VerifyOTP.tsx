import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import OtpInput from 'react-otp-input';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [otp, setOtp] = useState('');
  const [isAutoFetching, setIsAutoFetching] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/select-fi-account');
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

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            <FIU Name> uses <Anumati> to safely receive your financial details
          </h2>
          <p className="text-sm text-gray-600">
            Please enter the OTP sent by <Anumati> on <*****6781>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-12 h-12 text-center border rounded-lg mx-1 text-xl"
                />
              )}
              containerStyle="flex justify-center gap-2"
            />

            {isAutoFetching ? (
              <div className="text-center text-sm text-gray-600">
                Auto Fetching OTP
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mx-auto mt-2"></div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsAutoFetching(true)}
                className="text-purple-600 text-sm font-medium"
              >
                Resend OTP
              </button>
            )}

            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-center ${
                otp.length === 6
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
              disabled={otp.length !== 6}
            >
              Proceed
            </button>
          </form>

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
    </div>
  );
};

export default VerifyOTP;
  )
}