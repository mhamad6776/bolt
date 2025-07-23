import React, { useState } from 'react';
import LandingStep from './components/LandingStep';
import AuthStep from './components/AuthStep';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import EmployeePortal from './components/EmployeePortal';

function App() {
  const [currentStep, setCurrentStep] = useState<'landing' | 'auth' | 'terms' | 'privacy' | 'employee'>('landing');
  const [authType, setAuthType] = useState<'signup' | 'login'>('signup');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleAuthNavigation = (type: 'signup' | 'login') => {
    setAuthType(type);
    setCurrentStep('auth');
  };

  const handleBackToLanding = () => {
    setCurrentStep('landing');
  };

  const handleTermsNavigation = () => {
    setCurrentStep('terms');
  };

  const handlePrivacyNavigation = () => {
    setCurrentStep('privacy');
  };

  const handleAcceptTermsAndContinue = () => {
    setAgreedToTerms(true);
    setCurrentStep('landing');
  };

  const handleEmployeeNavigation = () => {
    setCurrentStep('employee');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-inter">
      <div className="relative overflow-hidden min-h-screen">
        {/* Landing Step */}
        <div className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          currentStep === 'landing' ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <LandingStep 
            onAuthNavigation={handleAuthNavigation}
            onTermsNavigation={handleTermsNavigation}
            onPrivacyNavigation={handlePrivacyNavigation}
            onEmployeeNavigation={handleEmployeeNavigation}
            agreedToTerms={agreedToTerms}
            setAgreedToTerms={setAgreedToTerms}
          />
        </div>

        {/* Auth Step */}
        <div className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          currentStep === 'auth' ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <AuthStep 
            authType={authType} 
            onBack={handleBackToLanding}
          />
        </div>

        {/* Terms of Use Page */}
        <div className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          currentStep === 'terms' ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <TermsOfUse onBack={handleBackToLanding} onAccept={handleAcceptTermsAndContinue} />
        </div>

        {/* Privacy Policy Page */}
        <div className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          currentStep === 'privacy' ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <PrivacyPolicy onBack={handleBackToLanding} onAccept={handleAcceptTermsAndContinue} />
        </div>

        {/* Employee Portal Page */}
        <div className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          currentStep === 'employee' ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <EmployeePortal onBack={handleBackToLanding} />
        </div>
      </div>
    </div>
  );
}

export default App;