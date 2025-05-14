// src/components/RegisterModal.jsx
import React from 'react';
import { ReactComponent as Pochta } from '../svgF/rectangle39.svg';
import { ReactComponent as BReg } from '../svgF/frame-88.svg';

export default function RegisterModal({ regData, handleChange, onSubmit, onClose }) {
  return (
    <div
      className="modal-backdrop"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',      // чуть светлее
        backdropFilter: 'blur(10px)',          // размытие
        WebkitBackdropFilter: 'blur(10px)',    // для Safari
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        zIndex: 100
      }}
    >
      <div
        className="modal-content"
        style={{
          position: 'relative',
          background: 'rgba(26, 26, 26, 0.85)', // полупрозрачное окно
          borderRadius: 12,
          width: '100%',
          maxWidth: 360,
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: 20,
          boxSizing: 'border-box'
        }}
      >
        <h2 style={{ color: 'white', margin: 0, marginBottom: 16 }}>Регистрация</h2>

        {[
          { name: 'firstName', placeholder: 'Имя', icon: true },
          { name: 'lastName',  placeholder: 'Фамилия', icon: true },
          { name: 'middleName', placeholder: 'Отчество', icon: true },
          { name: 'email',     placeholder: 'example@mail.com', type: 'email', icon: true },
          { name: 'password',  placeholder: '••••••••', type: 'password', icon: true },
          { name: 'confirmPassword', placeholder: '••••••••', type: 'password', icon: true }
        ].map((field, idx) => (
          <div key={idx} style={{ marginBottom: 12, position: 'relative' }}>
            {field.icon && (
              <Pochta
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 8,
                  width: 24,
                  height: 24,
                  pointerEvents: 'none'
                }}
              />
            )}
            <input
              type={field.type || 'text'}
              name={field.name}
              placeholder={field.placeholder}
              value={regData[field.name] || ''}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 12px 12px 40px',
                background: 'transparent',
                border: '1px solid #333',
                borderRadius: 6,
                color: 'white',
                fontSize: 16,            // чтобы iOS не зумил
                boxSizing: 'border-box'
              }}
            />
          </div>
        ))}

        <button
          onClick={onSubmit}
          className="button-press"
          style={{
            width: '100%',
            padding: '12px',
            background: '#2C96E1',
            border: 'none',
            borderRadius: 6,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            cursor: 'pointer',
            marginTop: 8
          }}
        >
          <BReg style={{ width: 24, height: 24, marginRight: 8 }} />
          Зарегистрироваться
        </button>

        <button
          onClick={onClose}
          className="button-press"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'none',
            border: 'none',
            color: '#ccc',
            fontSize: 24,
            cursor: 'pointer'
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
