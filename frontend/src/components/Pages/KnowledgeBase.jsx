import React, { useState, useEffect } from 'react';

// ==================== ЛОКАЛЬНЫЕ ДАННЫЕ (ВРЕМЕННО) ====================

const initialSections = [
  { id: 1, title: 'Основы волонтёрства', sphere: 'Обучение', icon: '📚' },
  { id: 2, title: 'Работа с НКО', sphere: 'Практика', icon: '🤝' },
  { id: 3, title: 'Первая помощь', sphere: 'Здоровье', icon: '⚕️' },
  { id: 4, title: 'Экологические проекты', sphere: 'Экология', icon: '🌱' },
  { id: 5, title: 'Социальная помощь', sphere: 'Социум', icon: '❤️' },
  { id: 6, title: 'Социальная помощь детям', sphere: 'Социум', icon: '❤️' },
];

const initialVideos = [
  { id: 1, section_id: 1, title: 'Что такое волонтёрство', vk_url: '194994222_456239405' },
  { id: 2, section_id: 1, title: 'Как начать волонтёрить', vk_url: '171236832_171236833' },
  { id: 3, section_id: 1, title: 'Волонтёр: истории людей', vk_url: '171236832_171236834' },
  { id: 4, section_id: 2, title: 'Структура НКО', vk_url: '171236832_171236835' },
  { id: 5, section_id: 2, title: 'Как работает некоммерческая организация', vk_url: '171236832_171236836' },
  { id: 6, section_id: 2, title: 'Управление проектами в НКО', vk_url: '171236832_171236837' },
  { id: 7, section_id: 3, title: 'Основы ПМП для волонтёров', vk_url: '171236832_171236838' },
  { id: 8, section_id: 3, title: 'Помощь при ранениях', vk_url: '171236832_171236839' },
  { id: 9, section_id: 3, title: 'Остановка кровотечения', vk_url: '171236832_171236840' },
  { id: 10, section_id: 4, title: 'Волонтёры за экологию', vk_url: '171236832_171236841' },
  { id: 11, section_id: 4, title: 'Уборка и озеленение', vk_url: '171236832_171236842' },
  { id: 12, section_id: 4, title: 'Экопроекты России', vk_url: '171236832_171236843' },
  { id: 13, section_id: 5, title: 'Помощь пожилым людям', vk_url: '171236832_171236844' },
  { id: 14, section_id: 5, title: 'Поддержка детей в беде', vk_url: '171236832_171236845' },
  { id: 15, section_id: 5, title: 'Социальные проекты', vk_url: '171236832_171236846' },
];

// const initialSections = await fetch('/api/sections').then(r => r.json()); // ← ЗАМЕНИ НА ЭТО КОГДА БУДЕТ БД
// const initialVideos = await fetch('/api/videos').then(r => r.json()); // ← ЗАМЕНИ НА ЭТО КОГДА БУДЕТ БД

// ========================================================================

function KnowledgeBase() {
  const [sections, setSections] = useState(initialSections); // const [sections, setSections] = useState([]); // ← РАСКОММЕНТИРУЙ ЭТО КОГДА БУДЕТ БД
  const [videos, setVideos] = useState(initialVideos); // const [videos, setVideos] = useState([]); // ← РАСКОММЕНТИРУЙ ЭТО КОГДА БУДЕТ БД
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedSphere, setSelectedSphere] = useState('Все');

  // НОВОЕ: Состояния для добавления видео
  const [showAddForm, setShowAddForm] = useState(false);
  const [newVideoData, setNewVideoData] = useState({
    title: '',
    sphere: '',
    vk_url: '',
  });

  // ==================== ЗАГРУЗКА ДАННЫХ ИЗ БД (раскомментируй когда будет готовая БД) ====================
  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const sectionsData = await fetch('/api/sections').then(r => r.json());
  //       const videosData = await fetch('/api/videos').then(r => r.json());
  //       setSections(sectionsData);
  //       setVideos(videosData);
  //       console.log('✅ Данные базы знаний загружены');
  //     } catch (error) {
  //       console.error('❌ Ошибка загрузки данных:', error);
  //     }
  //   };
  //
  //   loadData();
  //   const interval = setInterval(loadData, 30000); // обновляем каждые 30 сек
  //   return () => clearInterval(interval);
  // }, []);
  // ============================================================================================================

  // Получаем уникальные сферы для фильтра
  const spheres = ['Все', ...new Set(sections.map(s => s.sphere))];

  // Фильтруем разделы по сфере
  const filteredSections = selectedSphere === 'Все' ? sections : sections.filter(s => s.sphere === selectedSphere);

  // Переключаем развёртывание раздела
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Получаем видео для конкретного раздела
  const getVideosForSection = (sectionId) => {
    return videos.filter(v => v.section_id === sectionId);
  };

  // НОВОЕ: Обработчик добавления видео
  const handleAddVideo = (e) => {
    e.preventDefault();
    alert('Видео успешно добавлено!');
    setShowAddForm(false);
    setNewVideoData({ title: '', sphere: '', vk_url: '' });
  };

  // НОВОЕ: Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideoData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '10px' }}>
        Полезные материалы, видео и ресурсы для волонтёров и НКО
      </h1>

      {/* НОВОЕ: Кнопка добавить видео - СИНЯЯ */}
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
          margin: '10px auto 20px auto',
        }}
      >
        {showAddForm ? 'Отменить' : 'Добавить видео'}
      </button>

      {/* НОВОЕ: Форма добавления видео */}
      {showAddForm && (
        <div style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          borderRadius: '5px',
          padding: '20px',
          marginBottom: '20px',
          maxWidth: '600px',
          margin: '0 auto 20px auto',
        }}>
          <h2 style={{ marginTop: 0, color: '#333' }}>Добавить новое видео</h2>
          <form onSubmit={handleAddVideo}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
                Название видео:
              </label>
              <input
                type="text"
                name="title"
                value={newVideoData.title}
                onChange={handleInputChange}
                placeholder="Введите название видео"
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
                Сфера:
              </label>
              <select
                name="sphere"
                value={newVideoData.sphere}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
                required
              >
                <option value="">Выберите сферу</option>
                {spheres.map(sphere => sphere !== 'Все' && (
                  <option key={sphere} value={sphere}>{sphere}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>
                ID видео ВКонтакте:
              </label>
              <input
                type="text"
                name="vk_url"
                value={newVideoData.vk_url}
                onChange={handleInputChange}
                placeholder="Например: 194994222_456239405"
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

      {/* СТАРЫЙ КОД БЕЗ ИЗМЕНЕНИЙ */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        {spheres.map(sphere => (
          <button
            key={sphere}
            onClick={() => setSelectedSphere(sphere)}
            style={{
              padding: '8px 16px',
              margin: '5px',
              backgroundColor: selectedSphere === sphere ? '#007bff' : '#e9ecef',
              color: selectedSphere === sphere ? 'white' : '#333',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: selectedSphere === sphere ? 'bold' : 'normal',
            }}
          >
            {sphere}
          </button>
        ))}
      </div>

      {filteredSections.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999', marginTop: '40px' }}>😔 Разделы не найдены</p>
      ) : (
        filteredSections.map(section => (
          <div key={section.id} style={{ marginBottom: '20px' }}>
            {/* ИЗМЕНЕНО: Разделы еще толще - padding 60px */}
            <button
              onClick={() => toggleSection(section.id)}
              style={{
                width: '100%',
                padding: '60px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'left',
              }}
            >
              {section.icon} {section.title}
              <span style={{ float: 'right' }}>
                🏷️ {section.sphere} • 📹 {getVideosForSection(section.id).length} видео
              </span>
            </button>

            {expandedSections[section.id] && (
              <div style={{ padding: '15px', backgroundColor: '#f9f9f9', borderLeft: '3px solid #007bff', marginTop: '5px' }}>
                {getVideosForSection(section.id).length === 0 ? (
                  <p style={{ color: '#999' }}>Видео не добавлены</p>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
                    {getVideosForSection(section.id).map(video => (
                      <div
                        key={video.id}
                        style={{
                          padding: '10px',
                          backgroundColor: 'white',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                        }}
                      >
                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#333' }}>📹 {video.title}</p>
                        {/* VK VIDEO IFRAME - ИСПРАВЛЕНО */}
                        <iframe
                          src={`https://vk.com/video_ext.php?oid=-${video.vk_url.split('_')[0]}&id=${video.vk_url.split('_')[1]}&hd=2`}
                          width="100%"
                          height="120"
                          frameBorder="0"
                          allowFullScreen
                          style={{ borderRadius: '4px' }}
                          title={video.title}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default KnowledgeBase;