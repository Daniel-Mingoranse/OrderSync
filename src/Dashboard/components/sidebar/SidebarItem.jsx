import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ to, icon, display, active }) => (
    <Link to={to} className={`sidebar__menu__item ${active ? 'active' : ''}`}>
      <div className="sidebar__menu__item__icon">
        <i className={icon}></i>
      </div>
      <div className="sidebar__menu__item__text"><a>{display}</a></div>
    </Link>
  );
  
export default SidebarItem;
