// src/components/LoginModal.jsx
import React from 'react';
import { ReactComponent as Pochta } from '../svgF/rectangle39.svg';
import { ReactComponent as BVhod } from '../svgF/frame88.svg';

export default function LoginModal({ email, password, setEmail, setPassword, isLoading, onClose, onSubmit }) {
  return (
    <div
      className="modal-backdrop"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',              // чуть светлее
        backdropFilter: 'blur(10px)',                  // размытие
        WebkitBackdropFilter: 'blur(10px)',            // для Safari
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20, zIndex: 100
      }}
    >
      <div
        className="modal-content"
        style={{
          position: 'relative',
          background: 'rgba(26, 26, 26, 0.85)',         // полупрозрачнее основного окна
          borderRadius: 12, width: '100%', maxWidth: 360,
          maxHeight: '80vh', overflowY: 'auto',
          padding: 20, boxSizing: 'border-box'
        }}
      >
        <h2 style={{ color: 'white', margin: 0, marginBottom: 16 }}>Вход</h2>

        <div style={{ marginBottom: 12, position: 'relative' }}>
          <Pochta
            style={{
              position: 'absolute',
              width: 24, height: 24,
              top: 12, left: 8,
              pointerEvents: 'none'
            }}
          />
          <input
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 12px 12px 40px',
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: 6,
              color: 'white',
              fontSize: 16,             // важный момент для отключения зума
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: 16, position: 'relative' }}>
          <Pochta
            style={{
              position: 'absolute',
              width: 24, height: 24,
              top: 12, left: 8,
              pointerEvents: 'none'
            }}
          />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 12px 12px 40px',
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: 6,
              color: 'white',
              fontSize: 16,             // отключаем зум
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          onClick={!isLoading ? onSubmit : null}
          className="button-press"
          style={{
            width: '100%',
            padding: '12px',
            background: '#2C96E1',
            border: 'none',
            borderRadius: 6,
            color: 'white',
            fontSize: 16,
            cursor: isLoading ? 'default' : 'pointer'
          }}
        >
          {isLoading ? 'Загрузка...' : 'Войти'}
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
