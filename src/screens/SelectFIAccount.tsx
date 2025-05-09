import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';

const SelectFIAccount = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const banks = [
    { id: 'canara', name: 'Canara Bank', logo: 'canara-logo.png' },
    { id: 'icici', name: 'ICICI Bank', logo: 'icici-logo.png' },
    { id: 'sbi', name: 'SBI', logo: 'sbi-logo.png' },
    { id: 'axis', name: 'Axis Bank', logo: 'axis-logo.png' },
    { id: 'indusind', name: 'IndusInd Bank', logo: 'indusind-logo.png' },
    { id: 'kotak', name: 'Kotak Mahindra Bank', logo: 'kotak-logo.png' },
    { id: 'union', name: 'Union Bank', logo: 'union-logo.png' },
    { id: 'idfc', name: 'IDFC Bank', logo: 'idfc-logo.png' },
    { id: 'baroda', name: 'Bank of Baroda', logo: 'bob-logo.png' },
    { id: 'rbl', name: 'RBL Bank', logo: 'rbl-logo.png' },
    { id: 'indian', name: 'Indian Overseas Bank', logo: 'iob-logo.png' },
    { id: 'yes', name: 'Yes Bank', logo: 'yes-logo.png' },
  ];

  const handleBankSelect = (bankId: string) => {
    setSelectedBank(bankId);
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      navigate('/consent-details');
    }, 2000);
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
            <span className="text-sm text-gray-600">Accounts</span>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">Step 2 of 3</span>
              <button className="text-sm text-gray-600">ⓘ</button>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full w-2/3 bg-purple-600 rounded-full"></div>
          </div>
        </div>

        {isSearching ? (
          <div className="text-center space-y-6">
            <h2 className="text-xl font-semibold">Searching for selected accounts</h2>
            <p className="text-gray-600">This might take a while, please wait</p>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              <h2 className="text-xl font-semibold">Income verification</h2>
              <p className="text-sm text-gray-600">
                Please provide your bank account details for a secure income check and faster application processing
              </p>
              <p className="text-sm font-medium">Select your primary bank where income is credited</p>
            </div>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Search bank by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {banks.map((bank) => (
                <button
                  key={bank.id}
                  onClick={() => handleBankSelect(bank.id)}
                  className="p-4 border rounded-lg hover:border-purple-600 transition-colors"
                >
                  <div className="h-8 w-8 mb-2">
                    {/* Bank logo would go here */}
                  </div>
                  <span className="text-sm">{bank.name}</span>
                </button>
              ))}
            </div>

            <p className="text-xs text-red-500 mt-4">
              Joint account holders are not supported at this time
            </p>

            <button
              className="w-full py-3 mt-6 bg-gray-200 text-gray-500 rounded-lg"
              disabled
            >
              Proceed
            </button>
          </>
        )}

        <div className="mt-8 text-center text-xs text-gray-500">
          Secured data sharing by RBI-Regulated AA
        </div>
      </div>
    </div>
  );
};

export default SelectFIAccount;