import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebarCliente/Sidebar";
import "./AppDefaultLayout.scss";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <div className="menu">
        <Sidebar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
