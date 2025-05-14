// src/components/HomePage.jsx
import React from 'react'
import { ReactComponent as Domik } from '../svgF/Group-16.svg'
import { ReactComponent as BReg1 } from '../svgF/frame-89.svg'

export default function HomePage({ onLoginClick, onRegisterClick }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',   // шапка – центр – карточка
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        background: '#191919',
        overflow: 'hidden',
        paddingTop: 'env(safe-area-inset-top)',     // для iPhone notch
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      {/* Шапка */}
      <header style={{ color: 'white', fontSize: 24, fontWeight: 700 }}>
        My Home
      </header>

      {/* Контейнер с домиком + размытым фоном */}
      <div
        style={{
          position: 'relative',
          width: '90vw',
          maxWidth: 450,
          aspectRatio: `${450} / ${650}`, // сохраняем пропорции SVG
        }}
      >
        {/* Размытый круг позади */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(82,165,223,0.48)',
            borderRadius: '50%',
            filter: 'blur(140px)',
          }}
        />
        {/* Сам SVG-домик */}
        <Domik
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Футер с карточкой и кнопками */}
      <footer style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '90vw',
            maxWidth: 336,
            background: 'linear-gradient(134deg, #1A1A1A 0%, #0F0F0F 100%)',
            borderRadius: 33,
            padding: 16,
            boxSizing: 'border-box',
          }}
        >
          <button
            onClick={onLoginClick}
            className="button-press"
            style={{
              width: '100%',
              height: 48,
              background: '#2C96E1',
              border: 'none',
              borderRadius: 10,
              color: 'white',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              marginBottom: 12,
            }}
          >
            Войти
          </button>
          <div
            onClick={onRegisterClick}
            className="button-press"
            style={{
              width: '100%',
              height: 48,
              cursor: 'pointer',
              border: '1px solid #2C96E1',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BReg1 style={{ width: 24, height: 24, marginRight: 8 }} />
            <span style={{ color: '#2C96E1', fontSize: 14, fontWeight: 500 }}>
              Регистрация
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
