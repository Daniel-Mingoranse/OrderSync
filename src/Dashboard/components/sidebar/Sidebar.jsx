import React, { useState } from 'react';
import './sidebar.scss';
import SidebarItem from './SidebarItem';

const sidebarNavItems = [
  { display: 'Dashboard', icon: 'bx bx-home', to: '/' },
  { display: 'Perfil', icon: 'bx bx-user', to: '/profile' },
  { display: 'Notificações', icon: 'bx bx-bell', to: '/notifications' },
  { display: 'Configurações', icon: 'bx bx-cog', to: '/settings' },
  { display: 'Sair', icon: 'bx bx-log-out', to: '/logout' },
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
        Animate
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
            display={item.display}
            active={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
};


export default Sidebar;
