import React from 'react';
import { IoIosAnalytics } from 'react-icons/io';

const SalesChart = () => {
  return (
    <div className="dashboard-component sales-chart">
      <IoIosAnalytics size={40} style={{ marginBottom: '10px', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }} />
      <h2>Gráfico de Vendas</h2>
      {/* Adicione um gráfico de vendas fictício aqui */}
    </div>
  );
}

export default SalesChart;
