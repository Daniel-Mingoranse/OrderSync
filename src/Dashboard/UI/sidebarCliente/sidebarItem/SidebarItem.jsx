import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ to, text, active, isCollapsed, onClick }) => {
  const handleItemClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link to={to} className={`sidebar__menu__item ${active ? 'active' : ''}`} onClick={handleItemClick}>
      {!isCollapsed && <div className="sidebar__menu__item__text">{text}</div>}
    </Link>
  );
};

export default SidebarItem;
