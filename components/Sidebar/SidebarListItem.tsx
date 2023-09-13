import Image from '@/node_modules/next/image';
import React, { FC } from 'react';

export const SidebarListItem: FC = () => {
  return (
    <li className="sidebar__list-item chat">
      <Image
        className="chat__avatar"
        src="http://localhost:5555/uploads/avatar_private.png"
        alt="avatar"
        width={50}
        height={50}
      />
      <div className="chat__info">
        <h2 className="chat__name">Name</h2>
        <p className="chat__message">Chat message</p>
      </div>
      <span className="chat__date">12.09</span>
      <span className="chat__unread">1</span>
    </li>
  );
};
