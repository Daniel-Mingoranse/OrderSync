// DataSummary.jsx
import React from 'react';
import './CSS/DataSummary.css'
const DataSummary = ({ title, data, onClick }) => {
  return (
    <div className="data-summary" onClick={onClick}>
      <h2>{title}</h2>
      <p className='dataValue'>{data}</p>
    </div>
  );
};

export default DataSummary;
