import React from 'react';
import { Heart, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 text-center text-gray-500">
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-gray-200 pt-8 mb-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Features</h3>
              <ul className="text-sm space-y-2">
                <li>Smart compression algorithm</li>
                <li>Precise size control</li>
                <li>Multiple format support</li>
                <li>Real-time preview comparison</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Privacy</h3>
              <ul className="text-sm space-y-2">
                <li>Local processing</li>
                <li>No server upload</li>
                <li>Completely free</li>
                <li>No registration required</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Supported Formats</h3>
              <ul className="text-sm space-y-2">
                <li>JPEG / JPG</li>
                <li>PNG</li>
                <li>WebP</li>
                <li>Max 10MB</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-sm">
          <Code className="w-4 h-4" />
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500" />
          <span>Professional image compression tool</span>
        </div>
        
        <p className="text-xs mt-2 opacity-70">
          © 2025 Smart Image Compression Expert. All rights reserved.
        </p>
      </div>
    </footer>
  );
};