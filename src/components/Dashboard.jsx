import React, { useState } from 'react';
import NewRoom from './NewRoom';
import NewMyTask from './NewMyTask';
import NewGeneralTask from './NewGeneralTask';

const Dashboard = () => {
  const [showMyTaskModal, setShowMyTaskModal] = useState(false);
  const [showGeneralTaskModal, setShowGeneralTaskModal] = useState(false);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [rooms, setRooms] = useState(['Кухня', 'Гардероб', 'Спальня']);
  const [myTasks, setMyTasks] = useState([]);
  const [generalTasks, setGeneralTasks] = useState([]);

  const handleAddRoom = (newRoom) => {
    setRooms([...rooms, newRoom.name]);
    setShowRoomModal(false);
  };

  const handleAddMyTask = (newTask) => {
    setMyTasks([...myTasks, newTask]);
    setShowMyTaskModal(false);
  };

  const handleAddGeneralTask = (newTask) => {
    setGeneralTasks([...generalTasks, newTask]);
    setShowGeneralTaskModal(false);
  };

  const handleCompleteMyTask = (index) => {
    const newTasks = [...myTasks];
    newTasks.splice(index, 1);
    setMyTasks(newTasks);
  };

  const handleCompleteGeneralTask = (index) => {
    const newTasks = [...generalTasks];
    newTasks.splice(index, 1);
    setGeneralTasks(newTasks);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#1A1A1A',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 435,
        height: '100%',
        position: 'relative',
        overflow: 'auto',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}>
        <div style={{
          width: '90%',
          maxWidth: 435,
          padding: 20,
          margin: '0 auto',
          boxSizing: 'border-box',
          paddingBottom: 40,
        }}>
          <h1 style={styles.title}>Я</h1>

          {/* Мои задачи */}
          <h2 style={styles.sectionTitle}>Мои задачи</h2>
          <div style={styles.tasksGrid}>
            {myTasks.map((task, index) => (
              <div key={index} style={styles.fullSizeIconContainer}>
                <img 
                  src={task.icon} 
                  alt={task.name}
                  style={styles.fullSizeIcon}
                />
                <span style={styles.taskNameOverlay}>{task.name}</span>
                <button 
                  onClick={() => handleCompleteMyTask(index)}
                  style={styles.completeButton}
                >
                  ✓
                </button>
              </div>
            ))}
            <button 
              onClick={() => setShowMyTaskModal(true)}
              style={styles.plusButton}
            >
              +
            </button>
          </div>

          {/* Моя семья */}
          <h2 style={styles.sectionTitle}>Моя семья</h2>
          <div style={styles.tasksGrid}>
            <button 
              onClick={() => {}}
              style={styles.plusButton}
            >
              +
            </button>
          </div>

          {/* Общие задачи */}
          <h2 style={{...styles.sectionTitle, marginTop: 32}}>Общие задачи</h2>
          <div style={styles.tasksGrid}>
            {generalTasks.map((task, index) => (
              <div key={index} style={styles.fullSizeIconContainer}>
                <img 
                  src={task.icon} 
                  alt={task.name}
                  style={styles.fullSizeIcon}
                />
                <span style={styles.taskNameOverlay}>{task.name}</span>
                <button 
                  onClick={() => handleCompleteGeneralTask(index)}
                  style={styles.completeButton}
                >
                  ✓
                </button>
              </div>
            ))}
            <button 
              onClick={() => setShowGeneralTaskModal(true)}
              style={styles.plusButton}
            >
              +
            </button>
          </div>

          {/* Разделитель */}
          <div style={styles.divider} />

          {/* Список комнат */}
          <h2 style={{...styles.sectionTitle, marginTop: 32}}>Комнаты</h2>
          {rooms.map((room, index) => (
            <div key={index} style={styles.roomItem}>
              <span>{room}</span>
              <span style={{ fontSize: 18 }}>›</span>
            </div>
          ))}

          <button 
            onClick={() => setShowRoomModal(true)}
            style={styles.addButton}
          >
            Добавить комнату
          </button>

          {/* История моих задач */}
          <h2 style={{...styles.sectionTitle, marginTop: 32}}>История моих задач</h2>
          <div style={styles.historyContainer}>
            {/* Календарь и другие элементы истории задач */}
            <div style={styles.calendarHeader}>
              <span style={styles.monthYear}>Март 2025</span>
            </div>
            <div style={styles.weekDays}>
              {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day, i) => (
                <span key={i} style={styles.weekDay}>{day}</span>
              ))}
            </div>
            <div style={styles.calendarGrid}>
              {/* Пример ячеек календаря */}
              {Array.from({length: 35}).map((_, i) => (
                <div key={i} style={styles.calendarCell}></div>
              ))}
            </div>
          </div>

          {/* Рейтинг */}
          <div style={styles.ratingContainer}>
            <span style={styles.ratingText}>Рейтинг</span>
          </div>
        </div>
      </div>

      {/* Модальные окна */}
      {showMyTaskModal && (
        <NewMyTask 
          onClose={() => setShowMyTaskModal(false)}
          onAddTask={handleAddMyTask}
        />
      )}

      {showGeneralTaskModal && (
        <NewGeneralTask 
          onClose={() => setShowGeneralTaskModal(false)}
          onAddTask={handleAddGeneralTask}
        />
      )}

      {showRoomModal && (
        <NewRoom 
          onClose={() => setShowRoomModal(false)}
          onAddRoom={handleAddRoom}
        />
      )}
    </div>
  );
};

const styles = {
  title: {
    fontSize: 32,
    margin: 0,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  sectionTitle: {
    marginTop: 24,
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'Inter',
  },
  tasksGrid: {
    color: 'white',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    marginBottom: 16,
  },
  fullSizeIconContainer: {
    width: '100%',
    aspectRatio: '1/1',
    color: 'white',
    background: 'linear-gradient(135deg, #2A2A2A 0%, #141414 100%)',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  fullSizeIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  taskNameOverlay: {
    position: 'absolute',
    top: 3,
    left: 2,
    color: 'white',
    color: 'white',
    padding: '2px 6px',
    borderRadius: 4,
    fontSize: 12,
    maxWidth: '80%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  completeButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    color: 'white',
    width: 24,
    height: 24,
    background: '#2C96E1',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  plusButton: {
    width: '100%',
    aspectRatio: '1/1',
    background: 'linear-gradient(135deg, #2A2A2A 0%, #141414 100%)',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    color: '#555',
    border: 'none',
    cursor: 'pointer',
  },
  divider: {
    width: '50%',
    height: 2,
    background: '#333',
    margin: '24px auto',
  },
  roomItem: {
    display: 'flex',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    background: '#2A2A2A',
    borderRadius: 8,
    marginTop: 4,
    cursor: 'pointer',
  },
  addButton: {
    width: '100%',
    height: 48,
    marginTop: 16,
    background: '#2C96E1',
    border: 'none',
    borderRadius: 8,
    color: 'white',
    cursor: 'pointer',
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
  },
  historyContainer: {
    color: 'white',
    background: 'linear-gradient(134deg, #545454 0%, #0F0F0F 100%)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    boxShadow: '-30px -25px 72.7px -18px #5A5A5A inset',
  },
  calendarHeader: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 16,
  },
  monthYear: {
    fontSize: 24,
    fontWeight: '700',
  },
  weekDays: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekDay: {
    fontSize: 15,
    fontWeight: '700',
    color: '#949494',
    width: 'calc(100% / 7)',
    textAlign: 'center',
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: 8,
  },
  calendarCell: {
    width: '100%',
    aspectRatio: '1/1',
    background: '#949494',
    borderRadius: 7,
  },
  ratingContainer: {
    width: '100%',
    color: 'white',
    height: 64,
    background: 'linear-gradient(134deg, #2C96E1 30%, #195580 100%)',
    borderRadius: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '-30px -25px 72.7px -18px #1A8DE0 inset',
    marginTop: 16,
  },
  ratingText: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
};

export default Dashboard;