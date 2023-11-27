import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="dashboard-container">
        <div className="widget">
          <h3>Widget 1</h3>
          <p>Conteúdo do Widget 1</p>
        </div>

        <div className="widget">
          <h3>Widget 2</h3>
          <p>Conteúdo do Widget 2</p>
        </div>

        <div className="widget">
          <h3>Widget 3</h3>
          <p>Conteúdo do Widget 3</p>
        </div>

        {/* Adicione mais widgets conforme necessário */}
      </div>
    </div>
  );
};

export default Dashboard;
