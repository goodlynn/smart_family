import React, { useState } from 'react';

const NewRoom = ({ onClose, onAddRoom }) => {
  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (roomName.trim()) {
      onAddRoom({
        name: roomName,
        description,
        icon: '/src/svgF/room-icon.svg' // Замените на реальный путь
      });
      onClose();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#191919',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        maxWidth: 390,
        maxHeight: 913,
        overflow: 'hidden'
      }}>
        {/* Заголовок */}
        <div style={{
          left: 21,
          top: 42,
          position: 'absolute',
          color: 'white',
          fontSize: 38,
          fontFamily: 'Inter',
          fontWeight: '700'
        }}>
          Новая Комната
        </div>

        {/* Поле ввода названия */}
        <div style={{
          left: 21,
          top: 108,
          position: 'absolute',
          color: 'white',
          fontSize: 24,
          fontFamily: 'Inter',
          fontWeight: '700'
        }}>
          Введите название
        </div>
        
        <div style={{
          width: 348,
          height: 41,
          left: 21,
          top: 149,
          position: 'absolute',
          background: '#333333',
          borderRadius: 14
        }}>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Название..."
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
              border: 'none',
              padding: '0 15px',
              color: roomName ? 'white' : '#A3A3A3',
              fontSize: 14,
              fontFamily: 'Inter',
              fontWeight: '500'
            }}
          />
        </div>

        {/* Поле ввода описания */}
        <div style={{
          left: 21,
          top: 214,
          position: 'absolute',
          color: 'white',
          fontSize: 24,
          fontFamily: 'Inter',
          fontWeight: '700'
        }}>
          Введите описание
        </div>
        
        <div style={{
          width: 348,
          height: 133,
          left: 21,
          top: 255,
          position: 'absolute',
          background: '#333333',
          borderRadius: 14
        }}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Описание..."
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent',
              border: 'none',
              padding: '15px',
              color: description ? 'white' : '#A3A3A3',
              fontSize: 14,
              fontFamily: 'Inter',
              fontWeight: '500',
              resize: 'none'
            }}
          />
        </div>

        {/* Кнопка создания */}
        <button 
          onClick={handleSubmit}
          style={{
            width: 348,
            height: 64,
            left: 21,
            top: 440,
            position: 'absolute',
            background: 'linear-gradient(134deg, #28A0C4 0%, #2A6887 100%)',
            boxShadow: '-30px -25px 72.7px -18px #1A8DE0 inset',
            borderRadius: 14,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <div style={{
            left: 143,
            top: 20,
            position: 'absolute',
            textAlign: 'center',
            color: 'white',
            fontSize: 24,
            fontFamily: 'Inter',
            fontWeight: '500'
          }}>
            Создать
          </div>
        </button>

        {/* Кнопка закрытия */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 42,
            right: 21,
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: 24,
            cursor: 'pointer'
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default NewRoom;