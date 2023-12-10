// DetailedView.jsx
import React from 'react';
import './CSS/DetailedView.css';
import './CSS/Icon.css'
import { FaEye } from 'react-icons/fa';
const DetailedView = ({ componentName, data }) => {
  const detalhes = getDetalhes(componentName);
  const numSpans = data || 10; // Usando o valor de data ou padrão para 10

  const listaDetalhes = detalhes ? detalhes.slice(0, numSpans) : [];
  // Adicionando espaços entre palavras no título
  const tituloFormatado = componentName.replace(/([a-z])([A-Z])/g, '$1 $2');

  return (
    <div className={`detailed-view ${detalhes ? 'open' : ''}`}>
      {detalhes ? (
        <>
          <h2>{tituloFormatado}</h2>
          <ul className={`pedidos-list ${componentName}`}>
            {listaDetalhes.map((pedido, index) => (
              <li key={index} className={`detailed-item ${pedido.situacao.toLowerCase()}`}>
                <div className="status-marker" />
                <div className="item-details">
                  <span className="pedido">{pedido.numero}</span>
                  <span className="data">{`Data: ${pedido.data}`}</span>
                  <span className="situacao">{`Situação: ${pedido.situacao}`}</span>
                  <span className="icone-visualizacao">
                    <FaEye />
                  </span>
                </div>
              </li>
            ))}
          </ul>
          {detalhes.length > numSpans && (
            <p style={{ marginTop: '10px' }}>Role para ver mais detalhes...</p>
          )}
        </>
      ) : (
        <p>Nenhum detalhe disponível</p>
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
        { numero: 'Pedido 001', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 002', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 001', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 002', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 001', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 002', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 001', data: '00/00/00', situacao: 'Pendente' },
        { numero: 'Pedido 002', data: '00/00/00', situacao: 'Pendente' },
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
