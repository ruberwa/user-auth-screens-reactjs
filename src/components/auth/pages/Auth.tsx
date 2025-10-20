import React, { useState } from 'react';
import Login from '../components/forms/Login';
import Signup from '../components/forms/Signup';
import { authContent } from '../../..';

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-primaryBg to-secondaryBg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-primary">
            {authContent.title}
          </h2>
          <p className="mt-2 text-sm text-primaryLight">
            {authContent.subtitle}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-xl shadow-amazon-lg p-8">
          {/* Tab Navigation */}
          <div className="flex mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-xl transition-colors ${
                activeTab === 'login'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-primary hover:bg-gray-200'
              }`}
            >
              {authContent.tabs.signIn}
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-xl transition-colors ${
                activeTab === 'signup'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-primary hover:bg-gray-200'
              }`}
            >
              {authContent.tabs.signUp}
            </button>
          </div>

          {/* Form Content */}
          <div className="mt-6">
            {activeTab === 'login' ? <Login /> : <Signup />}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-primaryLight">
            {authContent.footer.terms}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
