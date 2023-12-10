// Profile.jsx
import React, { useState } from 'react';
import './profile.css';
import profile from '../../../assets/profile.png';
import { useSpring, animated } from 'react-spring';

const Profile = () => {
    const initialUser = {
        name: 'Daniel',
        profilePicture: profile,
        email: 'daniel@example.com',
        bio: 'Desenvolvedor apaixonado por tecnologia e música.',
    };

    const [user, setUser] = useState(initialUser);
    const [isEditing, setEditing] = useState(false);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        // Adicione validações de entrada, se necessário
        setEditing(false);
        // Simulando uma chamada assíncrona (pode ser uma requisição HTTP, por exemplo)
        setTimeout(() => {
            console.log('Dados do usuário salvos:', user);
        }, 1000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const inputAnimation = useSpring({
        opacity: isEditing ? 1 : 0,
        transform: isEditing ? 'translateY(0)' : 'translateY(20px)',
        delay: isEditing ? 400 : 0,
    });

    return (
        <div className={`profile-container ${isEditing ? 'editing' : ''}`}>
            <div className="profile-picture">
                <img src={user.profilePicture} alt="Profile" className="profileImage" />
                <h2 className="titleProfile">
                    {isEditing ? (
                        <animated.input
                            type="text"
                            name="name"
                            id="name"
                            value={user.name}
                            onChange={handleInputChange}
                            placeholder="Seu nome"
                            style={inputAnimation}
                        />
                    ) : (
                        user.name
                    )}
                </h2>
            </div>
            <div className="profile-details">
                <p>
                    Email:{' '}
                    {isEditing ? (
                        <animated.input
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            placeholder="Seu email"
                            style={inputAnimation}
                        />
                    ) : (
                        user.email
                    )}
                </p>
                <p>
                    Bio:{' '}
                    {isEditing ? (
                        <animated.textarea
                            name="bio"
                            onChange={handleInputChange}
                            placeholder="Sua biografia"
                            style={inputAnimation}
                        />
                    ) : (
                        user.bio
                    )}
                </p>
                {isEditing && (
                    <button onClick={handleSaveClick}>Salvar</button>
                )}
                {!isEditing && (
                    <button onClick={handleEditClick}>Editar</button>
                )}
            </div>
        </div>
    );
};

export default Profile;
