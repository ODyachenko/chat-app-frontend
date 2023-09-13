import React, { FC } from 'react';
import { TextingMessage } from './TextingMessage';

export const TextingMessages: FC = () => {
  return (
    <ul className="texting__messages">
      <TextingMessage />
      <TextingMessage />
      <TextingMessage />
    </ul>
  );
};
