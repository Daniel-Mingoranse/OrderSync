import React from 'react';
import './Dashboard.css';
import OrderStats from './Components/OrderState';
import RecentOrders from './Components/RecentOrders';
import SalesChart from './Components/SalesChart';
import CustomerFeedback from './Components/CustomerFeedback';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard de Pedidos</h1>
      <div className="dashboard-grid">
        <OrderStats />
        <RecentOrders />
        <SalesChart />
        <CustomerFeedback />
      </div>
    </div>
  );
}

export default Dashboard;
