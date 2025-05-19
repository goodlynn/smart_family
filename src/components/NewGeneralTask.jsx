import React, { useState } from 'react';

// Импортируем иконки напрямую
import icon1 from '../svgF/task-icon1.svg';
import icon2 from '../svgF/task-icon2.svg';
import icon3 from '../svgF/task-icon3.svg';
import icon4 from '../svgF/task-icon4.svg';

const NewGeneralTask = ({ onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [isRecurring, setIsRecurring] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [icon1, icon2, icon3, icon4];

  const handleSubmit = () => {
    if (taskName.trim()) {
      onAddTask({
        name: taskName,
        description,
        priority,
        isRecurring,
        icon: selectedIcon || icons[0]
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
      alignItems: 'center',
      overflow: 'auto'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        maxWidth: 390,
        maxHeight: 1600
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
          Новая общая задача
        </div>

        {/* Поле ввода названия */}
        <div style={{
          left: 21,
          top: 160,
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
          top: 200,
          position: 'absolute',
          background: '#333333',
          borderRadius: 14
        }}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Название..."
            style={{
              width: '90%',
              height: '100%',
              background: 'transparent',
              border: 'none',
              padding: '0 15px',
              color: taskName ? 'white' : '#A3A3A3',
              fontSize: 14,
              fontFamily: 'Inter',
              fontWeight: '500'
            }}
          />
        </div>

        {/* Поле ввода описания */}
        <div style={{
          left: 21,
          top: 270,
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
          top: 310,
          position: 'absolute',
          background: '#333333',
          borderRadius: 14
        }}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Описание..."
            style={{
              width: '90%',
              height: '80%',
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

        {/* Приоритет */}
        <div style={{
          left: 21,
          top: 470,
          position: 'absolute',
          color: 'white',
          fontSize: 24,
          fontFamily: 'Inter',
          fontWeight: '700'
        }}>
          Приоритет
        </div>
        
        <div style={{
          width: 351,
          left: 21,
          top: 520,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          {[
            { label: 'Низкий', value: 'low', color: '#1AE095' },
            { label: 'Средний', value: 'medium', color: '#EAF45E' },
            { label: 'Высокий', value: 'high', color: '#F44658' }
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setPriority(item.value)}
              style={{
                padding: 7,
                background: '#333333',
                borderRadius: 10,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer'
              }}
            >
              <span style={{ color: 'white', fontSize: 14 }}>{item.label}</span>
              <div style={{
                width: 17,
                height: 17,
                background: item.color,
                borderRadius: 4,
                opacity: priority === item.value ? 1 : 0.5
              }} />
            </button>
          ))}
        </div>

        {/* Цикличная задача */}
        <div style={{
          left: 20,
          top: 570,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          gap: 5
        }}>
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            style={{
              width: 17,
              height: 17,
              background: '#B9B9B9',
              borderRadius: 4
            }}
          />
          <span style={{ 
            color: 'white', 
            fontSize: 14,
            fontFamily: 'Inter',
            fontWeight: '500'
          }}>
            Цикличная задача
          </span>
        </div>

        {/* Выбор иконки */}
        <div style={{
          left: 24,
          top: 630,
          position: 'absolute',
          color: 'white',
          fontSize: 24,
          fontFamily: 'Inter',
          fontWeight: '700'
        }}>
          Выберите иконку
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          left: 21,
          top: 700,
          position: 'absolute',
          width: 348
        }}>
          {icons.map((icon, index) => (
            <div 
              key={index}
              onClick={() => setSelectedIcon(icon)}
              style={{
                width: 162,
                height: 162,
                background: selectedIcon === icon 
                  ? 'linear-gradient(134deg, #1A8DE0 0%, #2C3033 100%)' 
                  : 'linear-gradient(134deg, #3B77A1 0%, #2C3033 100%)',
                borderRadius: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                border: selectedIcon === icon ? '2px solid #1A8DE0' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              <img 
                src={icon} 
                alt={`Иконка ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  filter: selectedIcon === icon ? 'brightness(1.2)' : 'none'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '';
                }}
              />
            </div>
          ))}
        </div>

        {/* Кнопка создания */}
        <button 
          onClick={handleSubmit}
          style={{
            width: 348,
            height: 64,
            left: 21,
            top: 1080,
            position: 'absolute',
            background: 'linear-gradient(134deg, #28A0C4 0%, #2A6887 100%)',
            boxShadow: '-30px -25px 72.7px -18px #1A8DE0 inset',
            borderRadius: 14,
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'scale(1.02)'
            }
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
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'scale(1.1)'
            }
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default NewGeneralTask;