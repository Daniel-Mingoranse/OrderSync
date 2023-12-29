import React, { useState, useEffect } from 'react';
import './profile.css';
import defaultProfileImage from '../../../assets/profile.png';
import { useSpring, animated } from 'react-spring';

const Profile = () => {
    const initialUser = {
        name: 'Daniel',
        profilePicture: defaultProfileImage,
        email: 'daniel@example.com',
        bio: 'Desenvolvedor apaixonado por tecnologia e música.',
    };

    const [user, setUser] = useState(initialUser);
    const [originalUser, setOriginalUser] = useState(initialUser);
    const [isEditing, setEditing] = useState(false);
    const [isHovered, setHovered] = useState(false);

    useEffect(() => {
        setOriginalUser(user);
    }, [user]);

    const handleEditClick = () => {
        setEditing(!isEditing);
        if (!isEditing) {
            setOriginalUser(user);
        } else {
            setUser(originalUser);
        }
    };

    const handleSaveClick = () => {
        setEditing(false);
        // Simulando uma chamada assíncrona (pode ser uma requisição HTTP, por exemplo)
        setTimeout(() => {
            console.log('Dados do usuário salvos:', user);
        }, 1000);
    };

    const handleCancelClick = () => {
        setUser(originalUser);
        setEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleUploadChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
            // Verificar se o arquivo é uma imagem
            const isImage = file.type.startsWith('image/');
            
            if (isImage) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setUser({ ...user, profilePicture: reader.result });
                };
                reader.readAsDataURL(file);
            } else {
                // Se o arquivo não for uma imagem, você pode exibir uma mensagem de erro
                alert('Por favor, selecione uma imagem válida.');
                // Ou limpar o campo de entrada de arquivo
                e.target.value = '';
            }
        }
    };
    

    const inputAnimation = useSpring({
        opacity: isEditing ? 1 : 0,
        height: isEditing ? 'auto' : 0,
        marginTop: isEditing ? 10 : 0,
    });

    return (
        <div className={`profile-container${isEditing ? 'editing' : ''}`}>
            <div
                className={`profile-picture ${isEditing ? 'editable' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >

                <img
                    src={user.profilePicture}
                    alt="Profile"
                    className={`profileImage ${isEditing ? 'hoverable' : ''}`}
                    onClick={() => isEditing && document.getElementById('upload-input').click()}
                />

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
                <p>
                    {' '}
                    {isEditing ? (
                        <>
                            Alterar Imagem de Perfil:
                            <input
                                type="file"
                                id="upload-input"
                                style={{}}
                                onChange={handleUploadChange}
                            />
                        </>

                    ) : (
                        ''
                    )}
                </p>

                {isEditing && (
                    <>
                        <div className='buttons-formProfile'>
                            <button onClick={handleSaveClick}>Salvar</button>
                            <button onClick={handleCancelClick}>Voltar</button>
                        </div>

                    </>
                )}
                {!isEditing && <button onClick={handleEditClick}>Editar</button>}
            </div>
        </div>
    );
};

export default Profile;
