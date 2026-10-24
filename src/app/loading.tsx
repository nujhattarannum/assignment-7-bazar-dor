import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 space-y-4">
      {/* DaisyUI Spinner with Emerald Theme */}
      <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      
      {/* Optional Loading Text */}
      <p className="text-sm font-medium text-gray-500 animate-pulse">
        লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
      </p>
    </div>
  );
}