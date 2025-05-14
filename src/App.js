import React, { useState } from 'react';
import { ReactComponent as Domik } from './svgF/Group-16.svg';
import { ReactComponent as Pochta } from './svgF/rectangle39.svg';
import { ReactComponent as BVhod } from './svgF/frame88.svg';
import { ReactComponent as BReg } from './svgF/frame-88.svg';
import { ReactComponent as BReg1} from './svgF/frame-89.svg';

// App.js (или где вы делаете запросы)
const API_URL = process.env.REACT_APP_API_URL || (
  window.location.hostname === 'localhost'
    ? 'http://localhost:8080'
    : 'https://observantly-earnest-finfoot.cloudpub.ru'
);


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

function Dashboard() {
  const rooms = ['Кухня', 'Гардероб', 'Спальня'];

  return (
    <div style={{
      width: '435px',
      height: '852px',
      background: '#191919',
      color: 'white',
      fontFamily: 'Inter, sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto',
      position: 'relative'
    }}>
      {/* Заголовок */}
      <h1 style={{ margin: 0, fontSize: 32 }}>Я</h1>

      {/* Секция «Мои задачи» */}
      <h2 style={{ marginTop: 24, fontSize: 20 }}>Мои задачи</h2>
      <div style={{
        width: 100, height: 100,
        background: 'linear-gradient(135deg, #2A2A2A 0%, #141414 100%)',
        borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 48, color: '#555'
      }}>+</div>

      {/* Секция «Общие задачи» */}
      <h2 style={{ marginTop: 32, fontSize: 20 }}>Общие задачи</h2>
      <div style={{
        width: 100, height: 100,
        background: 'linear-gradient(135deg, #2A2A2A 0%, #141414 100%)',
        borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 48, color: '#555'
      }}>+</div>

      {/* Разделитель */}
      <div style={{
        width: '50%', height: 2,
        background: '#333',
        margin: '24px auto'
      }} />

      {/* Секция «Моя семья» */}
      <h2 style={{ fontSize: 20 }}>Моя семья</h2>
      <div style={{
        width: 100, height: 100,
        background: 'linear-gradient(135deg, #2A2A2A 0%, #141414 100%)',
        borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 48, color: '#555'
      }}>+</div>

      {/* Секция «Комнаты» */}
      <h2 style={{ marginTop: 32, fontSize: 20 }}>Комнаты</h2>
      {rooms.map((r, i) => (
        <div key={i} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          background: '#2A2A2A',
          borderRadius: 8,
          marginTop: i === 0 ? 8 : 4,
          cursor: 'pointer'
        }}>
          <span>{r}</span>
          <span style={{ fontSize: 18 }}>›</span>
        </div>
      ))}
      <button style={{
        width: '100%',
        height: 48,
        marginTop: 16,
        background: '#2C96E1',
        border: 'none',
        borderRadius: 8,
        color: 'white',
        fontSize: 16,
        cursor: 'pointer'
      }}>
        Добавить комнату
      </button>

      {/* Секция «История моих задач» */}
      <h2 style={{ marginTop: 32, fontSize: 20 }}>История моих задач</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
      }}>
        <button style={{ background: 'none', border: 'none', color: 'white', fontSize: 24, cursor: 'pointer' }}>‹</button>
        <span style={{ fontSize: 16 }}>Март 2025</span>
        <button style={{ background: 'none', border: 'none', color: 'white', fontSize: 24, cursor: 'pointer' }}>›</button>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 4,
        marginTop: 8
      }}>
        {Array(35).fill(0).map((_, i) => (
          <div key={i} style={{
            width: 40,
            height: 40,
            background: '#2A2A2A',
            borderRadius: 4
          }}/>
        ))}
      </div>

      {/* Кнопка «Рейтинг» */}
      <button style={{
        position: 'sticky',
        bottom: 20,
        marginTop: 32,
        width: '100%',
        height: 48,
        background: '#2C96E1',
        border: 'none',
        borderRadius: 8,
        color: 'white',
        fontSize: 16,
        cursor: 'pointer'
      }}>
        Рейтинг
      </button>
    </div>
  );
}

function App() {
  const [showLoginModal, setShowLoginModal]       = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [email, setEmail]                         = useState('');
  const [password, setPassword]                   = useState('');
  const [isLoading, setIsLoading]                 = useState(false);
  const [regData, setRegData]                     = useState({
    firstName: '', lastName: '', middleName: '',
    email: '', password: '', confirmPassword: ''
  });
  const [isAuthenticated, setIsAuthenticated]     = useState(false);

  const handleLoginSubmit = async () => {
  console.log('🏹 Попытка логина для', email);
  setIsLoading(true);
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
});
    console.log('🎯 Статус ответа:', response.status);

    if (!response.ok) {
      // например 401
      const text = await response.text();
      console.warn('Ошибка авторизации:', text);
      throw new Error(response.status.toString());
    }

    const user = await response.json();
    console.log('✅ Успешный логин, юзер:', user);
    setIsAuthenticated(true);
    setShowLoginModal(false);
  } catch (err) {
    console.error('🔥 login failed:', err);
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

  const handleRegisterSubmit = async () => {
  // 1) Проверка заполнения всех полей
  if (!Object.values(regData).every(Boolean)) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  // 2) Пароли совпадают?
  if (regData.password !== regData.confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: regData.email,
      role: 'USER',
      password: regData.password
    })
});

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err || 'Ошибка регистрации');
    }

    const user = await response.json();
    console.log('Registered:', user);
    alert('Регистрация прошла успешно');
    setShowRegisterModal(false);
  } catch (e) {
    console.error(e);
    alert('Не удалось зарегистрироваться: ' + e.message);
  }
};
if (isAuthenticated) {
    return <Dashboard />;
  }

  
  return (
    <div style={{
      width: '435px',
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
              top: '600px',   // было 771px
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
          zIndex: 100,
          overflowY: 'auto'    // добавляем прокрутку по вертикали
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