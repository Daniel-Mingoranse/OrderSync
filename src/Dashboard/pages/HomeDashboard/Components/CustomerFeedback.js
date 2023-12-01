import React from 'react';
import { FaComments } from 'react-icons/fa';

const CustomerFeedback = () => {
  return (
    <div className="dashboard-component customer-feedback">
      <FaComments size={40} style={{ marginBottom: '10px', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }} />
      <h2>Feedback do Cliente</h2>
      <p>Classificação Média: 4.5</p>
      {/* Adicione feedbacks fictícios aqui */}
    </div>
  );
}

export default CustomerFeedback;
