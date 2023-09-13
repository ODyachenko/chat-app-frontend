import React, { FC } from 'react';

type pageWrapperProps = {
  children: React.ReactNode;
};

export const PageWrapper: FC<pageWrapperProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="container">{children}</div>
    </div>
  );
};
