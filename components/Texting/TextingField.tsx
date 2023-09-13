import React, { FC } from 'react';

export const TextingField: FC = () => {
  return (
    <label className="texting__field">
      <textarea placeholder="Message" />
    </label>
  );
};
