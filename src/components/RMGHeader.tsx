// src/components/RMGHeader.tsx

import React from 'react';

interface RMGHeaderProps {
  title: string;
}

const RMGHeader: React.FC<RMGHeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default RMGHeader;
