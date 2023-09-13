import React, { FC } from 'react';
import { SidebarList } from './SidebarList';
import './styles.scss';

export const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <label className="sidebar__search">
        <input type="search" placeholder="Search" />
      </label>
      <SidebarList />
    </aside>
  );
};
