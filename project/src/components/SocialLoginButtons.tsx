import React from 'react';

interface SocialLoginButtonsProps {
  onSocialLogin: (provider: string) => void;
  isLoading: boolean;
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({ onSocialLogin, isLoading }) => {
  const socialProviders = [
    {
      name: 'Google',
      color: 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      color: 'bg-[#1877F2] text-white hover:bg-[#166FE5]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      color: 'bg-black text-white hover:bg-gray-800',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-3">
      {socialProviders.map((provider) => (
        <button
          key={provider.name}
          onClick={() => onSocialLogin(provider.name)}
          disabled={isLoading}
          className={`w-full ${provider.color} py-3 px-6 rounded-xl font-medium border transition-all duration-200 flex items-center justify-center space-x-3 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-sm hover:shadow-md`}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          ) : (
            provider.icon
          )}
          <span>Continue with {provider.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialLoginButtons;