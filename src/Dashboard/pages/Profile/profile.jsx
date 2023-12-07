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
        // Aqui você normalmente faria uma chamada para salvar os dados no backend
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

    // Utilize o hook useSpring para criar animações
    const nameAnimation = useSpring({
        opacity: isEditing ? 1 : 0,
        transform: isEditing ? 'translateY(0)' : 'translateY(20px)',
        delay: isEditing ? 400 : 0, // Adicione um atraso para uma animação mais suave
    });

    const emailAnimation = useSpring({
        opacity: isEditing ? 1 : 0,
        transform: isEditing ? 'translateY(0)' : 'translateY(20px)',
        delay: isEditing ? 500 : 0,
    });

    const bioAnimation = useSpring({
        opacity: isEditing ? 1 : 0,
        transform: isEditing ? 'translateY(0)' : 'translateY(20px)',
        delay: isEditing ? 600 : 0,
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
                       style={nameAnimation}
                     />
                    ) : (
                        user.name
                    )}
                </h2>
      </div>
      <div className="profile-details">
        <p>
          Email: {isEditing ? (
            <animated.input
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              style={emailAnimation}
            />
          ) : (
            user.email
          )}
        </p>
        <p>
         {isEditing ? (
            <animated.textarea
              name="bio"
              onChange={handleInputChange}
              style={bioAnimation}
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