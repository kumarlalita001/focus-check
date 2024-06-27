import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex w-screen items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-800 border-opacity-100 h-12 w-12"></div>
    </div>
  );
};

export default LoadingSpinner;
