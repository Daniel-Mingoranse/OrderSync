// BackButton.js
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import './css/BackButton.css';

const BackButton = () => {
  const navigate = useNavigate(); // Use o hook useNavigate para obter a função de navegação

  const handleBackClick = () => {
    navigate(-1); // Use o navigate com um valor negativo para voltar à rota anterior
  };

  return (
    <button onClick={handleBackClick} className="back-button">
      <FaArrowLeft className='icon'/>
    </button>
  );
};

export default BackButton;
