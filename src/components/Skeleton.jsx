// src/components/Skeleton.jsx
import React from 'react';

const Skeleton = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-card"></div>
      <div className="skeleton-card"></div>
      <div className="skeleton-card"></div>
    </div>
  );
};

export default Skeleton;