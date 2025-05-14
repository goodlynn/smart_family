import React, { useState } from 'react';
import { ReactComponent as Domik } from './svgF/Group-16.svg';
import { ReactComponent as Pochta } from './svgF/rectangle39.svg';
import { ReactComponent as BVhod } from './svgF/frame88.svg';
import { ReactComponent as BReg } from './svgF/frame-88.svg';
import { ReactComponent as BReg1} from './svgF/frame-89.svg';

// Добавляем стили для анимаций
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  .button-press {
    transition: transform 0.2s ease;
  }
  
  .button-press:active {
    transform: scale(0.95);
  }
  
  .modal-backdrop {
    animation: fadeIn 0.3s ease-out forwards;
  }
  
  .modal-content {
    animation: slideUp 0.3s ease-out forwards;
  }
`;

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Состояния для формы регистрации
  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginSubmit = async () => {
    if (!email || !password) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка авторизации');
      }

      const data = await response.json();
      console.log('Успешный вход:', data);
      setShowLoginModal(false);
      alert('Вход выполнен успешно!');
      
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Неверный email или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterSubmit = () => {
    // Проверка заполнения всех полей
    if (!Object.values(regData).every(Boolean)) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    
    // Проверка совпадения паролей
    if (regData.password !== regData.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    

  };

  return (
    <div style={{
      width: '393px',
      height: '852px',
      position: 'absolute',
      top: '0',
      left: '0',
      background: '#191919',
      overflow: 'hidden'
    }}>
      {/* Добавляем стили в компонент */}
      <style>{styles}</style>
      
      {/* Синий размытый круг */}
      <div style={{
        width: 521,
        height: 521,
        left: -18,
        top: 319,
        position: 'absolute',
        background: 'rgba(82, 165, 223, 0.48)',
        borderRadius: '50%',
        filter: 'blur(140px)'
      }} />
      


      {/* Заголовок */}
      <div style={{
        position: 'absolute',
        top: 42,
        width: '100%', // Занимает всю ширину родителя
        textAlign: 'center', // Центрируем текст
        color: 'white',
        fontSize: 24,
        fontFamily: 'Inter, sans-serif',
        fontWeight: '700'
      }}>
        My Home
        </div>
            <Domik 
        style={{
          position: 'absolute',
          width: 450,
          height: 650,
          top: '75px',
          left: '-70px',
        }}
      />
      {/* Основная карточка */}
      <div style={{
        width: 392,
        height: 288,
        left: 1,
        top: 633,
        position: 'absolute',
        background: 'linear-gradient(134deg, #1A1A1A 0%, #0F0F0F 100%)',
        borderRadius: 33
      }} />
      
      {/* Кнопки */}
      <div style={{
        width: 336,
        left: 29,
        top: 662,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        gap: 13
      }}>
        <button 
          onClick={() => setShowLoginModal(true)}
          className="button-press"
          style={{
            height: 48,
            padding: '18px 76px',
            background: '#2C96E1',
            border: 'none',
            borderRadius: 10,
            color: 'white',
            fontSize: 14,
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          Войти
        </button>
        <div 
    onClick={() => setShowRegisterModal(true)}
    className="button-press"
    style={{
      width: '336px',
      height: '48px',
      cursor: 'pointer'
    }}
  >
    <BReg1 style={{
      width: '100%',
      height: '100%'
    }} />
  </div>
</div>


      {/* Модальное окно входа */}
      {showLoginModal && (
        <div className="modal-backdrop" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
          zIndex: 100
        }}>
          {/* Заголовок "Вход" */}
          <h2 style={{ 
            color: 'white', 
            position: 'absolute',
            width: '95px',
            height: '46px',
            top: '5px',
            left: '21px',
            fontSize: '38px',
            fontFamily: 'Inter, sans-serif',
          }}>
            Вход
          </h2>

          {/* Поле email */}
          <h3 style={{ 
            color: 'white', 
            position: 'fixed',
            width: '182px',
            height: '29px',
            top: '80px',
            left: '21px',
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            Введите почту
          </h3>

          <div style={{
            position: 'fixed',
            width: '348px',
            height: '41px',
            top: '150px',
            left: '21px',
            zIndex: 50
          }}>
            <Pochta style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
            <input
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                position: 'absolute',
                width: '90%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '16px',
                padding: '0 15px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          {/* Поле пароля */}
          <h4 style={{ 
            color: 'white', 
            position: 'fixed',
            width: '182px',
            height: '29px',
            top: '180px',
            left: '21px',
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            Введите пароль
          </h4>

          <div style={{
            position: 'fixed',
            width: '348px',
            height: '41px',
            top: '260px',
            left: '21px',
            zIndex: 50
          }}>
            <Pochta style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                position: 'absolute',
                width: '90%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '16px',
                padding: '0 15px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          {/* Кнопка BVhod для отправки */}
          <div 
            onClick={!isLoading ? handleLoginSubmit : null}
            className="button-press"
            style={{
              position: 'absolute',
              width: '336px',
              height: '48px',
              top: '771px',
              left: '29px',
              zIndex: 50,
              cursor: isLoading ? 'default' : 'pointer',
              opacity: isLoading ? 0.7 : 1
            }}
          >
            <BVhod style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Кнопка закрытия */}
          <button 
            onClick={() => setShowLoginModal(false)}
            className="button-press"
            style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '32px',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>
      )}

      {/* Модальное окно регистрации */}
      {showRegisterModal && (
        <div className="modal-backdrop" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
          zIndex: 100
        }}>
          {/* Заголовок "Регистрация" */}
          <h2 style={{ 
            color: 'white', 
            position: 'absolute',
            width: '150px',
            height: '46px',
            top: '5px',
            left: '21px',
            fontSize: '38px',
            fontFamily: 'Inter, sans-serif',
          }}>
            Регистрация
          </h2>

          {/* Поле имени */}
          <h3 style={{ 
            color: 'white', 
            position: 'fixed',
            width: '182px',
            height: '29px',
            top: '80px',
            left: '21px',
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            Имя
          </h3>

          <div style={{
            position: 'fixed',
            width: '348px',
            height: '41px',
            top: '145px',
            left: '21px',
            zIndex: 50
          }}>
            <Pochta style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder="Введите ваше имя"
              name="firstName"
              value={regData.firstName}
              onChange={handleRegisterChange}
              style={{
                position: 'absolute',
                width: '90%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '16px',
                padding: '0 15px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          {/* Поле фамилии */}
          <h3 style={{ 
            color: 'white', 
            position: 'fixed',
            width: '182px',
            height: '29px',
            top: '180px',
            left: '21px',
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            Фамилия
          </h3>

          <div style={{
            position: 'fixed',
            width: '348px',
            height: '41px',
            top: '255px',
            left: '21px',
            zIndex: 50
          }}>
            <Pochta style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder="Введите вашу фамилию"
              name="lastName"
              value={regData.lastName}
              onChange={handleRegisterChange}
              style={{
                position: 'absolute',
                width: '90%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '16px',
                padding: '0 15px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          {/* Поле отчества */}
          <h3 style={{ 
            color: 'white', 
            position: 'fixed',
            width: '182px',
            height: '29px',
            top: '292px',
            left: '21px',
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            Отчество
          </h3>

          <div style={{
            position: 'fixed',
            width: '348px',
            height: '41px',
            top: '367px',
            left: '21px',
            zIndex: 50
          }}>
            <Pochta style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder="Введите ваше отчество"
              name="middleName"
              value={regData.middleName}
              onChange={handleRegisterChange}
              style={{
                position: 'absolute',
                width: '90%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '16px',
                padding: '0 15px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          {/* Поле email */}
          <h3 style={{ 
            color: 'white', 
            position: 'fixed',
            width: '182px',
            height: '29px',
            top: '402px',
            left: '21px',
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            Введите почту
          </h3>

          <div style={{
            position: 'fixed',
            width: '348px',
            height: '41px',
            top: '477px',
            left: '21px',
            zIndex: 50
          }}>
            <Pochta style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
            <input
              type="email"
              placeholder="example@mail.com"
              name="email"
              value={regData.email}
              onChange={handleRegisterChange}
              style={{
                position: 'absolute',
                width: '90%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '16px',
                padding: '0 15px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          {/* Поле пароля */}
          <h3 style={{ 
            color: 'white', 
            position: 'fixed',
            width: '182px',
            height: '29px',
            top: '512px',
            left: '21px',
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            Введите пароль
          </h3>

          <div style={{
            position: 'fixed',
            width: '348px',
            height: '41px',
            top: '587px',
            left: '21px',
            zIndex: 50
          }}>
            <Pochta style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder="••••••••"
              name="password"
              value={regData.password}
              onChange={handleRegisterChange}
              style={{
                position: 'absolute',
                width: '90%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '16px',
                padding: '0 15px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          {/* Поле подтверждения пароля */}
          <h3 style={{ 
            color: 'white', 
            position: 'fixed',
            width: '250px',
            height: '29px',
            top: '622px',
            left: '21px',
            fontSize: '24px',
            fontFamily: 'Inter, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            Повторите пароль
          </h3>

          <div style={{
            position: 'fixed',
            width: '348px',
            height: '41px',
            top: '697px',
            left: '21px',
            zIndex: 50
          }}>
            <Pochta style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
            <input
              type="text"
              placeholder="••••••••"
              name="confirmPassword"
              value={regData.confirmPassword}
              onChange={handleRegisterChange}
              style={{
                position: 'absolute',
                width: '90%',
                height: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'white',
                fontSize: '16px',
                padding: '0 15px',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>

          {/* Кнопка отправки */}
          <div 
            onClick={handleRegisterSubmit}
            className="button-press"
            style={{
              position: 'absolute',
              width: '336px',
              height: '48px',
              top: '771px',
              left: '29px',
              zIndex: 50,
              cursor: 'pointer'
            }}
          >
            <BReg style={{
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Кнопка закрытия */}
          <button 
            onClick={() => setShowRegisterModal(false)}
            className="button-press"
            style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '32px',
              cursor: 'pointer'
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default App;