import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ to, icon, text, active, isCollapsed }) => {
  return (
    <Link to={to} className={`sidebar__menu__item ${active ? 'active' : ''}`}>
      <div className="sidebar__menu__item__icon">{isCollapsed ? icon : null}</div>
      {!isCollapsed && <div className="sidebar__menu__item__text">{text}</div>}
    </Link>
  );
};

  
export default SidebarItem;
