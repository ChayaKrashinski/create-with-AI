// src/components/RMGInput.tsx

import React from 'react';

interface RMGInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RMGInput: React.FC<RMGInputProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default RMGInput;
