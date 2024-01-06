// FilterComponent.jsx
import React from 'react';
import { RiFilterLine, RiCalendarLine } from 'react-icons/ri'; // Importe os ícones desejados
import './CSS/Filter.css';

const FilterComponent = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [startDate, setStartDate] = React.useState('');

  const handleFilterChange = () => {
    // Atualize os filtros com os valores atuais
    onFilterChange({ searchTerm, startDate });
  };

  React.useEffect(() => {
    // Chame a função de callback com os filtros atualizados
    onFilterChange({ searchTerm, startDate });
  }, [searchTerm, startDate]);

  return (
    <div className="filter-controls">
      <div className="icon"><RiFilterLine /></div>
      <input
        type="text"
        placeholder="Número do Pedido"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="icon"><RiCalendarLine /></div>
      <input
        type="date"
        placeholder="Data"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>
  );
};

export default FilterComponent;
