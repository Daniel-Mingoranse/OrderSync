// DataSummary.jsx
import React from 'react';

const DataSummary = ({ title, data, onClick }) => {
  return (
    <div className="data-summary" onClick={onClick}>
      <h2>{title}</h2>
      <p>{data}</p>
    </div>
  );
};

export default DataSummary;
