// DetailedView.jsx
import React, { useState, useEffect } from 'react';
import './CSS/DetailedView.css';
import './CSS/Icon.css';
import { Link } from 'react-router-dom';
import { BiDetail } from 'react-icons/bi';
import FilterComponent from './Filter';

const DetailedView = ({ componentName, data }) => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    startDate: '',
    endDate: '',
  });

  const [resultNotFound, setResultNotFound] = useState(false);

  const handleFilterChange = (newFilters) => {
    // Atualize os filtros com os novos valores
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  useEffect(() => {
    // Verifique se há resultados
    const hasResults = checkResults(filters);

    // Atualize o estado resultNotFound
    setResultNotFound(!hasResults);
  }, [filters]);

  const checkResults = ({ searchTerm, startDate, endDate }) => {
    const detalhes = getDetalhes(componentName);

    return (
      detalhes &&
      detalhes.some((pedido) => {
        const searchTermMatch =
          pedido.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pedido.situacao.toLowerCase().includes(searchTerm.toLowerCase());

        const startDateMatch =
          !startDate || new Date(pedido.data) >= new Date(startDate);

        const endDateMatch =
          !endDate || new Date(pedido.data) <= new Date(endDate);

        return searchTermMatch && startDateMatch && endDateMatch;
      })
    );
  };

  const detalhes = getDetalhes(componentName);
  const numSpans = data || 10;

  // Aplicar filtros aqui com base nos valores em 'filters'
  const listaDetalhesFiltrada = detalhes
    ? detalhes.filter((pedido) => {
        const searchTermMatch =
          pedido.numero.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          pedido.situacao.toLowerCase().includes(filters.searchTerm.toLowerCase());

        const startDateMatch =
          !filters.startDate || new Date(pedido.data) >= new Date(filters.startDate);

        const endDateMatch =
          !filters.endDate || new Date(pedido.data) <= new Date(filters.endDate);

        return searchTermMatch && startDateMatch && endDateMatch;
      })
    : [];

  const listaDetalhes =
    listaDetalhesFiltrada.length > 0 ? listaDetalhesFiltrada.slice(0, numSpans) : detalhes.slice(0, numSpans);

  return (
    <div className={`detailed-view ${detalhes ? 'open' : ''}`}>
      <FilterComponent onFilterChange={handleFilterChange} />
      {listaDetalhes.length > 0 ? (
        <ul className={`pedidos-list ${componentName}`}>
          {listaDetalhes.map((pedido, index) => (
            <li key={index} className={`detailed-item ${pedido.situacao.toLowerCase()}`}>
              <div className="status-marker" />
              <div className="item-details">
                <span className="pedido">{pedido.numero}</span>
                <span className="data">{`Data: ${pedido.data}`}</span>
                <span className="situacao">{`Situação: ${pedido.situacao}`}</span>
                <Link to={`/dashboard/orderdetails/${pedido.numero}`}>
                  <button className="button-details">Mais Detalhes <BiDetail /></button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p>Nenhum detalhe disponível.</p>
          {resultNotFound && <p>Nenhum resultado encontrado.</p>}
        </>
      )}
      {detalhes.length > numSpans && (
        <p style={{ marginTop: '10px' }}>Role para ver mais detalhes...</p>
      )}
    </div>
  );
};

// Função auxiliar para obter detalhes com base no componente
const getDetalhes = (componentName) => {
  switch (componentName) {
    case 'pedidosPendentes':
      return [
        { numero: 'Pedido 001', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 002', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 003', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 004', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 005', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 006', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 007', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 008', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 009', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 010', data: '01/01/2001', situacao: 'Pendente' },
        // Adicione mais pedidos pendentes conforme necessário  
      ];
    case 'pedidosConcluidos':
      return [
        { numero: 'Pedido 003', data: '00/00/00', situacao: 'Concluído' },
        { numero: 'Pedido 004', data: '00/00/00', situacao: 'Concluído' },
        // Adicione mais pedidos concluídos conforme necessário
      ];
    case 'pedidosAndamento':
      return [
        { numero: 'Pedido 005', data: '00/00/00', situacao: 'Em andamento' },
        { numero: 'Pedido 006', data: '00/00/00', situacao: 'Em andamento' },
        // Adicione mais pedidos em andamento conforme necessário
      ];
    case 'pedidosCancelados':
      return [
        { numero: 'Pedido 007', data: '00/00/00', situacao: 'Cancelado' },
        { numero: 'Pedido 008', data: '00/00/00', situacao: 'Cancelado' },
        // Adicione mais pedidos cancelados conforme necessário
      ];
    default:
      return null;
  }
};

export default DetailedView;
