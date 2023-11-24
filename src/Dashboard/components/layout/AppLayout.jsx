import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./appLayout.scss"; // Certifique-se de importar o arquivo de estilo correspondente

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
