import React, { useState } from 'react';

const rooms = ['Кухня', 'Гардероб', 'Спальня'];

export default function Dashboard() {
  return (
    <div style={{ width: 435, height: 852, background: '#191919', color: 'white', padding: 20, boxSizing: 'border-box', overflowY: 'auto' }}>
      <h1 style={{ fontSize: 32, margin: 0 }}>Я</h1>
      <h2 style={{ marginTop: 24, fontSize: 20 }}>Мои задачи</h2>
      <div style={{ width: 100, height: 100, background: 'linear-gradient(135deg, #2A2A2A 0%, #141414 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, color: '#555' }}>+</div>
      <h2 style={{ marginTop: 32, fontSize: 20 }}>Общие задачи</h2>
      <div style={{ width: 100, height: 100, background: 'linear-gradient(135deg, #2A2A2A 0%, #141414 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, color: '#555' }}>+</div>
      <div style={{ width: '50%', height: 2, background: '#333', margin: '24px auto' }} />
      <h2 style={{ fontSize: 20 }}>Моя семья</h2>
      <div style={{ width: 100, height: 100, background: 'linear-gradient(135deg, #2A2A2A 0%, #141414 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, color: '#555' }}>+</div>
      <h2 style={{ marginTop: 32, fontSize: 20 }}>Комнаты</h2>
      {rooms.map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#2A2A2A', borderRadius: 8, marginTop: i === 0 ? 8 : 4, cursor: 'pointer' }}>
          <span>{r}</span><span style={{ fontSize: 18 }}>›</span>
        </div>
      ))}
      <button style={{ width: '100%', height: 48, marginTop: 16, background: '#2C96E1', border: 'none', borderRadius: 8, color: 'white', cursor: 'pointer' }}>Добавить комнату</button>
      <h2 style={{ marginTop: 32, fontSize: 20 }}>История моих задач</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <button style={{ background: 'none', border: 'none', color: 'white', fontSize: 24, cursor: 'pointer' }}>‹</button>
        <span style={{ fontSize: 16 }}>Март 2025</span>
        <button style={{ background: 'none', border: 'none', color: 'white', fontSize: 24, cursor: 'pointer' }}>›</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginTop: 8 }}>
        {Array(35).fill().map((_, i) => <div key={i} style={{ width: 40, height: 40, background: '#2A2A2A', borderRadius: 4 }} />)}
      </div>
      <button style={{ position: 'sticky', bottom: 20, marginTop: 32, width: '100%', height: 48, background: '#2C96E1', border: 'none', borderRadius: 8, color: 'white', cursor: 'pointer' }}>Рейтинг</button>
    </div>
  );
}