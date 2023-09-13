import Image from '@/node_modules/next/image';
import React, { FC } from 'react';

export const TextingUser: FC = () => {
  return (
    <div className="texting__user">
      <Image
        className="texting__avatar"
        src="http://localhost:5555/uploads/avatar_private.png"
        alt="User avatar"
        width={50}
        height={50}
      />
      <div className="texting__info">
        <h2 className="texting__name">Name</h2>
        <span className="texting__online">last seen 5 mins ago</span>
      </div>
      {/* <div className="texting__actions">
            span
        </div> */}
    </div>
  );
};
