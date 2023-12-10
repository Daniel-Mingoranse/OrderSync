import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CSS/OrderDetails.css';
import BackButton from '../../ClientCards/Components/BackButton';
const OrderDetailsPage = () => {
    const { orderId } = useParams();

    // Lógica para obter os detalhes do pedido (dados fictícios)
    const getOrderDetails = (orderId) => {
        return {
            id: orderId,
            numero: `Pedido ${orderId}`,
            data: '00/00/00',
            situacao: 'pendente',
            cliente: 'João da Silva',
            endereco: 'Rua Principal, 123',
            itens: [
                { nome: 'Produto 1', quantidade: 2, precoUnitario: 20 },
                { nome: 'Produto 2', quantidade: 1, precoUnitario: 30 },
            ],
            total: 70,
            observacoes: 'Nenhuma observação',
            // Adicione mais detalhes conforme necessário
        };
    };

    const orderDetails = getOrderDetails(orderId);

    useEffect(() => {
        const container = document.querySelector('.order-details-container');
        container.classList.add('in-view');
    }, []);

    return (
        <div className="order-details-container">

            <div className={`status-bar ${orderDetails.situacao.toLowerCase().replace(' ', '-')}`} />
            <div className='header-container'>
            <Link to="/dashboard" className="back-button">
                    <BackButton />
                </Link>
                <h1 className='title'>Detalhes do Pedido</h1>
            </div>
            <div className="details-section">
                <div>
                    <p>
                        <strong>Número do Pedido:</strong> {orderDetails.numero}
                    </p>
                    <p>
                        <strong>Data:</strong> {orderDetails.data}
                    </p>
                    <p>
                        <strong>Situação:</strong> {orderDetails.situacao}
                    </p>
                    <p>
                        <strong>Cliente:</strong> {orderDetails.cliente}
                    </p>
                    <p>
                        <strong>Endereço:</strong> {orderDetails.endereco}
                    </p>
                </div>
                <div>
                    <h2>Itens do Pedido</h2>
                    <ul>
                        {orderDetails.itens.map((item, index) => (
                            <li key={index}>
                                {item.nome} - Quantidade: {item.quantidade} - Preço Unitário: ${item.precoUnitario}
                            </li>
                        ))}
                    </ul>
                    <p>
                        <strong>Total:</strong> ${orderDetails.total}
                    </p>
                </div>
            </div>
            <div className="observations-section">
                <h2>Observações</h2>
                <p>{orderDetails.observacoes}</p>
            </div>
        </div>
    );
};

export default OrderDetailsPage;
