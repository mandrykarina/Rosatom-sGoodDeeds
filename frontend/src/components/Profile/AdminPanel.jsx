import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [modalUser, setModalUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError('');
      const token = localStorage.getItem('access_token');
      if (!token) {
        throw new Error('Токен не найден. Пожалуйста, переавторизуйтесь');
      }

      const response = await fetch('http://localhost:8000/api/admin/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 401) {
        throw new Error('Ошибка авторизации. Токен истёк или невалидный');
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Ошибка загрузки пользователей');
      }

      const data = await response.json();
      setUsers(data);
      applySort(data, searchTerm, cityFilter);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
      setError(error.message || 'Не удалось загрузить пользователей');
    } finally {
      setLoading(false);
    }
  };

  const getHierarchyOrder = (userType) => {
    const order = {
      'admin': 0,
      'moderator': 1,
      'nko_member': 2,
      'volunteer': 3
    };
    return order[userType] || 999;
  };

  const getUserTypeLabel = (userType) => {
    const labels = {
      'admin': 'Администратор',
      'moderator': 'Модератор',
      'nko_member': 'Член НКО',
      'volunteer': 'Волонтер'
    };
    return labels[userType] || userType;
  };

  const applySort = (usersToSort, search, city) => {
    let filtered = usersToSort;

    if (search && search.trim() !== '') {
      filtered = filtered.filter(u =>
        u.full_name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (city && city.trim() !== '') {
      filtered = filtered.filter(u =>
        u.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    const sorted = filtered.sort((a, b) => {
      return getHierarchyOrder(a.user_type) - getHierarchyOrder(b.user_type);
    });

    setFilteredUsers(sorted);
  };

  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearchTerm(newSearch);
    applySort(users, newSearch, cityFilter);
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setCityFilter(newCity);
    applySort(users, searchTerm, newCity);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setCityFilter('');
    applySort(users, '', '');
  };

  const makeRequest = async (url, method = 'POST') => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Ошибка авторизации');
      return false;
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 401) {
        alert('Сессия истекла. Пожалуйста, переавторизуйтесь');
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return false;
      }

      return response.ok;
    } catch (error) {
      console.error('Ошибка запроса:', error);
      return false;
    }
  };

  const handleModeratorClick = (user) => {
    setModalUser(user);
    setShowModal(true);
  };

  const confirmModeratorAction = async () => {
    if (!modalUser) return;

    const isModerator = modalUser.user_type === 'moderator';
    const url = isModerator
      ? `http://localhost:8000/api/admin/users/${modalUser.id}/remove-moderator`
      : `http://localhost:8000/api/admin/users/${modalUser.id}/make-moderator`;

    if (await makeRequest(url)) {
      alert(isModerator ? 'Права модератора отозваны' : 'Пользователь назначен модератором');
      setShowModal(false);
      setModalUser(null);
      loadUsers();
    } else {
      alert('Ошибка при изменении статуса');
    }
  };

  const banUser = async (userId) => {
    if (await makeRequest(`http://localhost:8000/api/admin/users/${userId}/ban`)) {
      alert('Пользователь заблокирован');
      loadUsers();
    } else {
      alert('Ошибка при блокировке');
    }
  };

  const unbanUser = async (userId) => {
    if (await makeRequest(`http://localhost:8000/api/admin/users/${userId}/unban`)) {
      alert('Пользователь разблокирован');
      loadUsers();
    } else {
      alert('Ошибка при разблокировке');
    }
  };

  const deleteUser = async (userId) => {
    if (!window.confirm('Вы уверены? Это действие необратимо!')) {
      return;
    }

    if (await makeRequest(`http://localhost:8000/api/admin/users/${userId}/delete`, 'DELETE')) {
      alert('Пользователь удален');
      loadUsers();
    } else {
      alert('Ошибка при удалении');
    }
  };

  const viewUserProfile = (userId) => {
    navigate(`/admin/user/${userId}`);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUser(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.adminHeader}>
        <h1 style={styles.title}>Панель управления</h1>

        <div style={styles.buttonsGrid}>
          <button style={styles.adminBtn} title="Управление новостями">
            Новости
          </button>
          <button style={styles.adminBtn} title="Управление календарем">
            Календарь
          </button>
          <button style={styles.adminBtn} title="Управление базой знаний">
            База знаний
          </button>
          <button style={styles.adminBtn} title="Управление списком организаций">
            Организации
          </button>
        </div>
      </div>

      <h2 style={styles.sectionTitle}>Управление пользователями</h2>

      {error && <div style={styles.error}>{error}</div>}

      <div style={styles.filtersContainer}>
        <input
          type="text"
          placeholder="Поиск по имени или email..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Фильтр по городу..."
          value={cityFilter}
          onChange={handleCityChange}
          style={styles.input}
        />
        <button onClick={handleClearFilters} style={styles.clearBtn}>
          Очистить фильтры
        </button>
      </div>

      {loading ? (
        <div style={styles.loading}>Загрузка...</div>
      ) : filteredUsers.length === 0 ? (
        <div style={styles.noUsers}>Пользователи не найдены</div>
      ) : (
        <div style={styles.tableContainer}>
          <p style={styles.userCount}>Всего пользователей: {filteredUsers.length}</p>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>Имя</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Тип</th>
                <th style={styles.th}>Город</th>
                <th style={styles.th}>Статус</th>
                <th style={styles.th}>Действия</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id} style={styles.row}>
                  <td style={styles.td}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        viewUserProfile(user.id);
                      }}
                      style={styles.userLink}
                      title="Перейти на страницу пользователя"
                    >
                      {user.full_name}
                    </a>
                  </td>
                  <td style={styles.td}>{user.email}</td>
                  <td style={styles.td}>{getUserTypeLabel(user.user_type)}</td>
                  <td style={styles.td}>{user.city}</td>
                  <td style={styles.td}>{user.is_banned ? 'Заблокирован' : 'Активен'}</td>
                  <td style={styles.td}>
                    {user.user_type !== 'admin' && user.user_type !== 'moderator' && user.user_type === 'volunteer' && (
                      <button onClick={() => handleModeratorClick(user)} style={styles.actionBtn}>
                        Модератор
                      </button>
                    )}
                    {user.user_type === 'moderator' && (
                      <button onClick={() => handleModeratorClick(user)} style={styles.actionBtnWarning}>
                        Снять права
                      </button>
                    )}
                    {user.user_type !== 'admin' && (
                      <>
                        {user.is_banned ? (
                          <button onClick={() => unbanUser(user.id)} style={styles.actionBtn}>
                            Разблокировать
                          </button>
                        ) : (
                          <button onClick={() => banUser(user.id)} style={styles.actionBtnDanger}>
                            Блокировать
                          </button>
                        )}
                      </>
                    )}
                    {user.user_type !== 'admin' && (
                      <button onClick={() => deleteUser(user.id)} style={styles.actionBtnDelete}>
                        Удалить
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && modalUser && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 style={styles.modalTitle}>Подтверждение</h3>
            <p style={styles.modalText}>
              <strong>Пользователь:</strong> {modalUser.full_name}
            </p>
            <p style={styles.modalText}>
              <strong>Email:</strong> {modalUser.email}
            </p>
            <p style={styles.modalText}>
              <strong>Текущий статус:</strong> {getUserTypeLabel(modalUser.user_type)}
            </p>
            <p style={styles.questionText}>
              {modalUser.user_type === 'moderator'
                ? 'Хотите отозвать права модератора и вернуть его волонтером?'
                : 'Хотите назначить его модератором?'}
            </p>
            <div style={styles.modalButtons}>
              <button onClick={confirmModeratorAction} style={styles.modalBtnConfirm}>
                Да
              </button>
              <button onClick={closeModal} style={styles.modalBtnCancel}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '24px',
    backgroundColor: '#1a1a1a',
    minHeight: '100vh',
  },
  adminHeader: {
    marginBottom: '32px',
    backgroundColor: '#2d2d2d',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    borderLeft: '4px solid #2c5282',
  },
  title: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0 0 20px 0',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '20px',
    marginTop: '0',
  },
  buttonsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '12px',
  },
  adminBtn: {
    padding: '12px 16px',
    backgroundColor: '#2c5282',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(44, 82, 130, 0.4)',
  },
  filtersContainer: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
    backgroundColor: '#2d2d2d',
    padding: '16px',
    borderRadius: '8px',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1',
    minWidth: '200px',
    padding: '10px 12px',
    border: '1px solid #444444',
    borderRadius: '6px',
    fontSize: '14px',
    fontFamily: 'inherit',
    backgroundColor: '#3a3a3a',
    color: '#ffffff',
  },
  clearBtn: {
    padding: '10px 16px',
    backgroundColor: '#555555',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
  },
  tableContainer: {
    backgroundColor: '#1f1f1f',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
    border: '1px solid #333333',
  },
  userCount: {
    padding: '16px 16px 0 16px',
    margin: '0',
    fontSize: '14px',
    color: '#aaaaaa',
    fontWeight: '500',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  headerRow: {
    backgroundColor: '#262626',
    borderBottom: '2px solid #3a3a3a',
  },
  th: {
    padding: '12px 16px',
    textAlign: 'left',
    fontSize: '13px',
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  row: {
    borderBottom: '1px solid #333333',
    transition: 'backgroundColor 0.2s ease',
  },
  rowHover: {
    backgroundColor: '#2a2a2a',
  },
  td: {
    padding: '14px 16px',
    fontSize: '14px',
    color: '#cccccc',
  },
  userLink: {
    color: '#4a9eff',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'color 0.2s ease',
  },
  actionBtn: {
    marginRight: '6px',
    padding: '6px 10px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'backgroundColor 0.2s ease',
  },
  actionBtnWarning: {
    marginRight: '6px',
    padding: '6px 10px',
    backgroundColor: '#f59e0b',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '12px',
    cursor: 'pointer',
  },
  actionBtnDanger: {
    marginRight: '6px',
    padding: '6px 10px',
    backgroundColor: '#ef4444',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '12px',
    cursor: 'pointer',
  },
  actionBtnDelete: {
    padding: '6px 10px',
    backgroundColor: '#dc2626',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '12px',
    cursor: 'pointer',
  },
  error: {
    padding: '12px 16px',
    backgroundColor: '#4a1a1a',
    color: '#ff9999',
    borderRadius: '6px',
    marginBottom: '16px',
    fontSize: '14px',
    border: '1px solid #5a2a2a',
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    color: '#888888',
    fontSize: '16px',
  },
  noUsers: {
    textAlign: 'center',
    padding: '40px',
    color: '#888888',
    fontSize: '16px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#2d2d2d',
    borderRadius: '8px',
    padding: '24px',
    maxWidth: '400px',
    width: '90%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
    border: '1px solid #444444',
  },
  modalTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    marginTop: '0',
    marginBottom: '16px',
  },
  modalText: {
    fontSize: '14px',
    color: '#cccccc',
  },
  questionText: {
    fontSize: '14px',
    color: '#cccccc',
    fontWeight: '500',
    marginTop: '16px',
    marginBottom: '24px',
  },
  modalButtons: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-end',
  },
  modalBtnConfirm: {
    padding: '10px 20px',
    backgroundColor: '#10b981',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  },
  modalBtnCancel: {
    padding: '10px 20px',
    backgroundColor: '#555555',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default AdminPanel;
