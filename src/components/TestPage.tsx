// src/components/TestPage.tsx

import React from 'react';
import RMGButton from './RMGButtonProps';

const TestPage: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <h1>Test Page</h1>
      <RMGButton title="Click Me" onClick={handleClick} />
    </div>
  );
};

export default TestPage;
