import React, { FC } from 'react';
import { TextingField } from './TextingField';
import { TextingMessages } from './TextingMessages';

export const TextingCanvas: FC = () => {
  return (
    <div className="texting__canvas">
      <TextingMessages />
      <TextingField />
    </div>
  );
};
