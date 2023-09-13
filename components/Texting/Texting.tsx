import React, { FC } from 'react';
import { TextingCanvas } from './TextingCanvas';
import { TextingUser } from './TextingUser';
import './styles.scss';

export const Texting: FC = () => {
  return (
    <main className="texting">
      <TextingUser />
      <TextingCanvas />
    </main>
  );
};
