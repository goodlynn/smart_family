import React, { useState } from 'react';
import HomePage from './components/HomePage';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import Dashboard from './components/Dashboard';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || (
  window.location.hostname === 'localhost'
    ? 'http://localhost:8080'
    : 'https://observantly-earnest-finfoot.cloudpub.ru'
);

const styles = `
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  .button-press { transition: transform 0.2s ease; }
  .button-press:active { transform: scale(0.95); }
  .modal-backdrop { animation: fadeIn 0.3s ease-out forwards; }
  .modal-content { animation: slideUp 0.3s ease-out forwards; }
`;

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [regData, setRegData] = useState({
    firstName: '', lastName: '', middleName: '',
    email: '', password: '', confirmPassword: ''
  });

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) throw new Error(await res.text());
      setIsAuthenticated(true);
      setShowLogin(false);
    } catch (e) {
      alert('Неверный email или пароль');
    } finally { setIsLoading(false); }
  };

  const handleRegisterChange = e => {
    const { name, value } = e.target;
    setRegData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    if (!Object.values(regData).every(Boolean)) { alert('Заполните все поля'); return; }
    if (regData.password !== regData.confirmPassword) { alert('Пароли не совпадают'); return; }
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: regData.email, role: 'USER', password: regData.password })
      });
      if (!res.ok) throw new Error(await res.text());
      alert('Регистрация успешна');
      setShowRegister(false);
    } catch (e) {
      alert('Ошибка регистрации: ' + e.message);
    }
  };

  if (isAuthenticated) return <Dashboard />;

  return (
    <div>
      <style>{styles}</style>
      <HomePage
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      {showLogin && (
        <LoginModal
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          isLoading={isLoading}
          onClose={() => setShowLogin(false)}
          onSubmit={handleLogin}
        />
      )}

      {showRegister && (
        <RegisterModal
          regData={regData}
          handleChange={handleRegisterChange}
          onSubmit={handleRegister}
          onClose={() => setShowRegister(false)}
        />
      )}
    </div>
  );
}