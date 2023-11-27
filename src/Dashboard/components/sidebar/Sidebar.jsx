import React, { useState } from 'react';
import './sidebar.scss';
import SidebarItem from './SidebarItem';
import { FaHome, FaUser, FaBell, FaCog, FaSignOutAlt, FaChevronLeft   } from 'react-icons/fa';

const sidebarNavItems = [
  { display: 'Dashboard', icon: <FaHome />, to: '/' }, ,
  { display: 'Perfil', icon: <FaUser />, to: '/profile' },
  { display: 'Notificações', icon: <FaBell />, to: '/notifications' },
  { display: 'Configurações', icon: <FaCog />, to: '/settings' },
  { display: 'Sair', icon: <FaSignOutAlt />, to: '/logout' },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarRef = React.useRef();
  const indicatorRef = React.useRef();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar__logo" onClick={toggleCollapse}>
        <FaChevronLeft   className='logo'/> 
      </div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${activeIndex * 60}px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <SidebarItem
            key={index}
            to={item.to}
            icon={item.icon}
            text={item.display}
            active={activeIndex === index}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </div>
  );
};


export default Sidebar;
