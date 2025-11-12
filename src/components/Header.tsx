import React from 'react';
import { ImageIcon, Zap, Shield } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-12 animate-slide-in-up">
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-20 animate-pulse-soft"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl">
            <ImageIcon className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>
      
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
        Smart Image Compression Expert
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        Professional online image compression tool with intelligent algorithms ensuring optimal quality and precise file size control
      </p>
      
      <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-500" />
          <span>Lightning Fast</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-500" />
          <span>Privacy Protection</span>
        </div>
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-purple-500" />
          <span>Quality Guaranteed</span>
        </div>
      </div>
    </header>
  );
};