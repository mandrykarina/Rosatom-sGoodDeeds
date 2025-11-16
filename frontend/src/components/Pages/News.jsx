import React, { useState } from 'react';

function News({ selectedCity }) {
  const [newsItems] = useState([
    {
      id: 1,
      title: 'Новое сотрудничество с НКО "Беркут"',
      date: '15 ноября 2025',
      city: 'Обнинск, Калужская область',
      description: 'Подписано соглашение о развитии волонтёрских программ в регионе...',
      image: '📰',
    },
    {
      id: 2,
      title: 'Открыт набор волонтёров на проект "Зелёный город"',
      date: '12 ноября 2025',
      city: 'Электросталь, Московская область',
      description: 'Приглашаем активных граждан участвовать в озеленении парков...',
      image: '🌱',
    },
    {
      id: 3,
      title: 'Успешно завершен фестиваль "Добрые сердца"',
      date: '10 ноября 2025',
      city: 'Саров, Нижегородская область',
      description: 'На фестивале собралось более 500 волонтёров и активистов...',
      image: '🎉',
    },
  ]);

  // НОВОЕ: Состояния для добавления новости
  const [showAddForm, setShowAddForm] = useState(false);
  const [newNewsData, setNewNewsData] = useState({
    title: '',
    description: '',
    date: new Date().toLocaleDateString('ru-RU'),
  });

  // НОВОЕ: Обработчик добавления новости
  const handleAddNews = (e) => {
    e.preventDefault();
    alert('Новость успешно добавлена!');
    setShowAddForm(false);
    setNewNewsData({ title: '', description: '', date: new Date().toLocaleDateString('ru-RU') });
  };

  // НОВОЕ: Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNewsData(prev => ({ ...prev, [name]: value }));
  };

  const filteredNews = selectedCity ? newsItems.filter((item) => item.city === selectedCity) : newsItems;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>
        {selectedCity ? `Новости для города: ${selectedCity}` : 'Все новости и инициативы'}
      </h1>

      {/* НОВОЕ: Кнопка добавить новость - СИНЯЯ */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          display: 'block',
          margin: '0 auto 20px auto',
        }}
      >
        {showAddForm ? 'Отменить' : 'Добавить новость'}
      </button>

      {/* НОВОЕ: Форма добавления новости */}
      {showAddForm && (
        <div style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          borderRadius: '5px',
          padding: '20px',
          marginBottom: '20px',
        }}>
          <h2 style={{ marginTop: 0, color: '#333' }}>Добавить новую новость</h2>
          <form onSubmit={handleAddNews}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
                Название:
              </label>
              <input
                type="text"
                name="title"
                value={newNewsData.title}
                onChange={handleInputChange}
                placeholder="Введите название новости"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
                Описание:
              </label>
              <textarea
                name="description"
                value={newNewsData.description}
                onChange={handleInputChange}
                placeholder="Введите описание новости"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                  minHeight: '100px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
                Дата:
              </label>
              <input
                type="date"
                name="date"
                value={newNewsData.date}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              Добавить
            </button>
          </form>
        </div>
      )}

      {/* ИЗМЕНЕНО: Новости теперь выстроены вертикально (один в ряд) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filteredNews.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>
            {selectedCity ? `Пока нет новостей для города "${selectedCity}"` : 'Новостей нет'}
          </p>
        ) : (
          filteredNews.map((news) => (
            <div key={news.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>{news.image}</div>
              <h3 style={{ margin: '10px 0', color: '#333' }}>{news.title}</h3>
              <p style={{ margin: '5px 0', fontSize: '12px', color: '#999' }}>{news.date}</p>
              <p style={{ margin: '5px 0', fontSize: '12px', color: '#666' }}>Город: {news.city}</p>
              <p style={{ margin: '10px 0', color: '#555', lineHeight: '1.5' }}>{news.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default News;