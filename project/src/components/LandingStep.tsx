import React, { useState } from 'react';
import { ChevronRight, Shield, Users, Zap } from 'lucide-react';

interface LandingStepProps {
  onAuthNavigation: (type: 'signup' | 'login') => void;
  onTermsNavigation: () => void;
  onPrivacyNavigation: () => void;
  onEmployeeNavigation: () => void;
  agreedToTerms: boolean;
  setAgreedToTerms: (agreed: boolean) => void;
}

const LandingStep: React.FC<LandingStepProps> = ({ 
  onAuthNavigation, 
  onTermsNavigation, 
  onPrivacyNavigation, 
  onEmployeeNavigation,
  agreedToTerms, 
  setAgreedToTerms 
}) => {

  const handleAuthClick = (type: 'signup' | 'login') => {
    if (!agreedToTerms) {
      // Add visual feedback for missing terms agreement
      const checkbox = document.getElementById('terms-checkbox');
      if (checkbox) {
        checkbox.classList.add('ring-2', 'ring-red-500', 'ring-offset-2');
        checkbox.parentElement?.classList.add('animate-pulse');
      }
      
      // Show alert to user
      alert('Please agree to the Terms of Use and Privacy Policy to continue with authentication.');
      
      setTimeout(() => {
        if (checkbox) {
          checkbox.classList.remove('ring-2', 'ring-red-500', 'ring-offset-2');
          checkbox.parentElement?.classList.remove('animate-pulse');
        }
      }, 2000);
      return;
    }
    onAuthNavigation(type);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Employee Portal Button - Top Right */}
      <button
        onClick={onEmployeeNavigation}
        className="absolute top-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-500/30"
      >
        Employee Portal
      </button>

      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-pulse opacity-20"></div>
            <div className="relative w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg">BS</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">BuildSpace</h1>
        </div>

        {/* Main Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
          {/* Promotional Text */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Register now, secure your spot in our live website
            </h2>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>Community</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Fast Setup</span>
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="mb-6">
            <label className="flex items-start space-x-3 cursor-pointer group">
              <div className="relative">
                <input
                  id="terms-checkbox"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 transition-all duration-200"
                />
              </div>
              <span className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                I agree to the{' '}
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onTermsNavigation();
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
                >
                  Terms of Use
                </button>{' '}
                and{' '}
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onPrivacyNavigation();
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
                >
                  Privacy Policy
                </button>
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => handleAuthClick('signup')}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Sign up</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => handleAuthClick('login')}
              className="w-full bg-white text-gray-700 py-3 px-6 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-500/30 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Log in</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Join thousands of builders already using BuildSpace
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            © 2025 BuildSpace. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingStep;