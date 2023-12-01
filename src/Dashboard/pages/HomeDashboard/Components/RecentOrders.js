import React from 'react';
import { FiList } from 'react-icons/fi';

const RecentOrders = () => {
  return (
    <div className="dashboard-component recent-orders">
      <FiList size={40}  style={{ marginBottom: '10px', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }} />
      <h2>Pedidos Recentes</h2>
      <ul>
        <li>Pedido #001 - Entregue</li>
        <li>Pedido #002 - Pendente</li>
        <li>Pedido #003 - Pendente</li>
        
        {/* Adicione mais itens fictícios conforme necessário */}
      </ul>
    </div>
  );
}

export default RecentOrders;
