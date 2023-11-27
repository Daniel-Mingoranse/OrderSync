import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./appLayout.scss"; 
import RoutesDashboard from '../../RoutesSideBar/RoutesDashboard';
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
