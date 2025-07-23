import React, { useState } from 'react';
import { ArrowLeft, Building2, Mail, Lock, Eye, EyeOff, Shield, Users, Award } from 'lucide-react';

interface EmployeePortalProps {
  onBack: () => void;
}

const EmployeePortal: React.FC<EmployeePortalProps> = ({ onBack }) => {
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [department, setDepartment] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate employee authentication
    setTimeout(() => {
      setIsLoading(false);
      const message = authType === 'signup' 
        ? `Employee account created successfully for ${email}!` 
        : 'Employee logged in successfully!';
      alert(message);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Back Button - Top Left */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/70"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back</span>
      </button>

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full animate-pulse opacity-20"></div>
            <div className="relative w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Building2 className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Portal</h1>
          <p className="text-gray-600">Access your BuildSpace employee account</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          {/* Auth Type Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setAuthType('login')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                authType === 'login'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Employee Login
            </button>
            <button
              onClick={() => setAuthType('signup')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                authType === 'signup'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              New Employee
            </button>
          </div>

          {/* Employee Benefits */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-600" />
              Employee Benefits
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-green-500" />
                <span>Access to internal tools and resources</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-500" />
                <span>Employee dashboard and analytics</span>
              </div>
              <div className="flex items-center">
                <Building2 className="w-4 h-4 mr-2 text-blue-500" />
                <span>Company directory and communication</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Employee ID - Only for Signup */}
            {authType === 'signup' && (
              <div>
                <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">
                  Employee ID
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    id="employeeId"
                    type="text"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                    placeholder="Enter your employee ID"
                    required
                  />
                </div>
              </div>
            )}

            {/* Department - Only for Signup */}
            {authType === 'signup' && (
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select your department</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="support">Customer Support</option>
                  <option value="hr">Human Resources</option>
                  <option value="finance">Finance</option>
                  <option value="operations">Operations</option>
                </select>
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Work Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  placeholder="Enter your work email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-800 hover:to-gray-950 focus:outline-none focus:ring-4 focus:ring-gray-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Processing...' : (authType === 'signup' ? 'Create Employee Account' : 'Sign In to Portal')}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              {authType === 'login' 
                ? 'Need help? Contact IT support at support@buildspace.com'
                : 'New employee registration requires HR approval'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePortal;