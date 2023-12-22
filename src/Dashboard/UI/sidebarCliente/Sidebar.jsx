import React, { useState } from 'react';
import './sidebar.scss';
import SidebarItem from './sidebarItem/SidebarItem';
import { FaHome, FaUser, FaTools, FaCog, FaSignOutAlt, FaChevronLeft } from 'react-icons/fa';


const sidebarNavItems = [
  { display: 'Inicio', to: '/' },
  { display: 'Perfil', to: '/profile' },
  { display: 'Serviços', to: '/services' },
  { display: 'Configurações', to: '/settings' },
  { display: 'Sair', to: '/logout' },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const sidebarRef = React.useRef();
  const indicatorRef = React.useRef();

  const toggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar__logo" onClick={toggleCollapse}>
        <FaChevronLeft className='logo' />
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
            to={`/dashboard${item.to}`}
            text={item.display}
            active={activeIndex === index}
            isCollapsed={isCollapsed}
            onClick={() => setActiveIndex(index)} 
          />
        ))}
      </div>
    </div>
  );
};


export default Sidebar;
