import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';

const OrderStats = () => {
  return (
    <div className="dashboard-component order-stats">
      <FiBarChart2 size={40}  style={{ marginBottom: '10px', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }} />
      <h2>Estatísticas de Pedidos</h2>
      <p>Total de Pedidos: 150</p>
      <p>Pedidos Pendentes: 20</p>
      {/* Adicione gráficos e informações relevantes aqui */}
    </div>
  );
}

export default OrderStats;
