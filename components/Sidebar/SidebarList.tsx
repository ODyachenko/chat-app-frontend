import React, { FC } from 'react';
import { SidebarListItem } from './SidebarListItem';

export const SidebarList: FC = () => {
  return (
    <ul className="sidebar__list">
      <SidebarListItem />
      <SidebarListItem />
      <SidebarListItem />
    </ul>
  );
};
