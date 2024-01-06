import React, { useState } from 'react';
import './sidebar.scss';
import SidebarItem from './sidebarItem/SidebarItem';
import { FaChevronLeft } from 'react-icons/fa';

const sidebarNavItems = [
  { display: 'Inicio', to: '/' },
  { display: 'Perfil', to: '/profile' },
  { display: 'Serviços', to: '/services' },
  { display: 'Sair', to: '/logout' },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsCollapsed(true);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar__logo" onClick={toggleCollapse}>
        <FaChevronLeft className='logo' />
      </div>
      <div className="sidebar__menu">
        {!isCollapsed && (
          <>
            <div
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
                onClick={() => handleItemClick(index)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
