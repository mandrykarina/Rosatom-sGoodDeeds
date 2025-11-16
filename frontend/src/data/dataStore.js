/**
 * ==================== ЦЕНТРАЛЬНОЕ ХРАНИЛИЩЕ ДАННЫХ ====================
 * Путь: frontend/src/data/dataStore.js
 *
 * Это файл хранит ВСЕ данные о НКО и видео БЕЗ базы данных
 * Все изменения администратора сохраняются в этот файл
 * =========================================================================
 */

// ==================== ДАННЫЕ ПО ГОРОДАМ ====================
export const cityMapsConfig = [
  { name: 'Обнинск, Калужская область', lat: 55.1159, lng: 36.6085 },
  { name: 'Электросталь, Московская область', lat: 55.8113, lng: 38.4544 },
  { name: 'Саров, Нижегородская область', lat: 54.4994, lng: 43.6655 },
];

// ==================== ДАННЫЕ ПО НКО ====================
export let nkoList = [
  // ОБНИНСК (10 НКО)
  { id: 1, name: 'НКО "Беркут"', city: 'Обнинск, Калужская область', category: 'Образование', description: 'Помощь в образовании детей', phone: '+7 (900) 123-45-67', website: 'www.berkut-nko.ru', image: '🦅' },
  { id: 2, name: 'НКО "Вместе"', city: 'Обнинск, Калужская область', category: 'Культура', description: 'Развитие культуры', phone: '+7 (903) 456-78-90', website: 'www.vmeste-nko.ru', image: '🎨' },
  { id: 3, name: 'НКО "Социум"', city: 'Обнинск, Калужская область', category: 'Социальная помощь', description: 'Социальные проекты', phone: '+7 (904) 567-89-01', website: 'www.socium-nko.ru', image: '👥' },
  { id: 4, name: 'НКО "Молодость"', city: 'Обнинск, Калужская область', category: 'Спорт', description: 'Развитие детского спорта', phone: '+7 (905) 678-90-12', website: 'www.molodost-nko.ru', image: '⚽' },
  { id: 5, name: 'НКО "Здоровье"', city: 'Обнинск, Калужская область', category: 'Медицина', description: 'Профилактика и здоровье', phone: '+7 (906) 789-01-23', website: 'www.zdorove-nko.ru', image: '⚕️' },
  { id: 6, name: 'НКО "Экополис"', city: 'Обнинск, Калужская область', category: 'Экология', description: 'Защита окружающей среды', phone: '+7 (907) 890-12-34', website: 'www.ekopolis-nko.ru', image: '🌍' },
  { id: 7, name: 'НКО "Достоинство"', city: 'Обнинск, Калужская область', category: 'Права человека', description: 'Защита прав граждан', phone: '+7 (908) 901-23-45', website: 'www.dostoinstvo-nko.ru', image: '⚖️' },
  { id: 8, name: 'НКО "Библиотека+"', city: 'Обнинск, Калужская область', category: 'Образование', description: 'Культурное развитие и просвещение', phone: '+7 (909) 012-34-56', website: 'www.biblioteka-plus-nko.ru', image: '📚' },
  { id: 9, name: 'НКО "Звезда"', city: 'Обнинск, Калужская область', category: 'Искусство', description: 'Развитие талантов молодёжи', phone: '+7 (910) 123-45-67', website: 'www.zvezda-nko.ru', image: '⭐' },
  { id: 10, name: 'НКО "Долголетие"', city: 'Обнинск, Калужская область', category: 'Социальная помощь', description: 'Помощь пожилым людям', phone: '+7 (911) 234-56-78', website: 'www.dolgoletie-nko.ru', image: '🧓' },

  // ЭЛЕКТРОСТАЛЬ (10 НКО)
  { id: 11, name: 'НКО "Зелёный город"', city: 'Электросталь, Московская область', category: 'Экология', description: 'Озеленение парков', phone: '+7 (901) 234-56-78', website: 'www.zeleniy-gorod.ru', image: '🌱' },
  { id: 12, name: 'НКО "Индустрия"', city: 'Электросталь, Московская область', category: 'Образование', description: 'Профтехническое образование', phone: '+7 (912) 345-67-89', website: 'www.industriya-nko.ru', image: '🏭' },
  { id: 13, name: 'НКО "Дети+Семья"', city: 'Электросталь, Московская область', category: 'Социальная помощь', description: 'Помощь многодетным семьям', phone: '+7 (913) 456-78-90', website: 'www.deti-semya-nko.ru', image: '👨‍👩‍👧‍👦' },
  { id: 14, name: 'НКО "Спектр"', city: 'Электросталь, Московская область', category: 'Инклюзия', description: 'Помощь людям с ОВЗ', phone: '+7 (914) 567-89-01', website: 'www.spektr-nko.ru', image: '🌈' },
  { id: 15, name: 'НКО "Механика"', city: 'Электросталь, Московская область', category: 'STEM', description: 'Развитие инженерных навыков', phone: '+7 (915) 678-90-12', website: 'www.mehanika-nko.ru', image: '⚙️' },
  { id: 16, name: 'НКО "Рассвет"', city: 'Электросталь, Московская область', category: 'Культура', description: 'Творческие мастерские', phone: '+7 (916) 789-01-23', website: 'www.rassvet-nko.ru', image: '🎭' },
  { id: 17, name: 'НКО "Будущее"', city: 'Электросталь, Московская область', category: 'Образование', description: 'Карьерная ориентация молодежи', phone: '+7 (917) 890-12-34', website: 'www.budushee-nko.ru', image: '🚀' },
  { id: 18, name: 'НКО "Рука помощи"', city: 'Электросталь, Московская область', category: 'Благотворительность', description: 'Материальная помощь нуждающимся', phone: '+7 (918) 901-23-45', website: 'www.ruka-pomoshi-nko.ru', image: '🤝' },
  { id: 19, name: 'НКО "Здравница"', city: 'Электросталь, Московская область', category: 'Медицина', description: 'Профилактика заболеваний', phone: '+7 (919) 012-34-56', website: 'www.zdravnica-nko.ru', image: '💊' },
  { id: 20, name: 'НКО "Перемена"', city: 'Электросталь, Московская область', category: 'Социальная помощь', description: 'Поддержка бездомных', phone: '+7 (920) 123-45-67', website: 'www.peremena-nko.ru', image: '🏠' },

  // САРОВ (10 НКО)
  { id: 21, name: 'НКО "Добрые сердца"', city: 'Саров, Нижегородская область', category: 'Социальная помощь', description: 'Помощь людям', phone: '+7 (902) 345-67-89', website: 'www.dobryeserdca.ru', image: '❤️' },
  { id: 22, name: 'НКО "Наука+Жизнь"', city: 'Саров, Нижегородская область', category: 'Образование', description: 'Популяризация науки', phone: '+7 (921) 234-56-78', website: 'www.nauka-zhizn-nko.ru', image: '🔬' },
  { id: 23, name: 'НКО "Память"', city: 'Саров, Нижегородская область', category: 'История', description: 'Сохранение культурного наследия', phone: '+7 (922) 345-67-89', website: 'www.pamyat-nko.ru', image: '🏛️' },
  { id: 24, name: 'НКО "Молодежь"', city: 'Саров, Нижегородская область', category: 'Образование', description: 'Молодежные проекты', phone: '+7 (923) 456-78-90', website: 'www.molodezh-nko.ru', image: '👦' },
  { id: 25, name: 'НКО "Наследие"', city: 'Саров, Нижегородская область', category: 'Культура', description: 'Культурные инициативы', phone: '+7 (924) 567-89-01', website: 'www.nasledie-nko.ru', image: '🎪' },
  { id: 26, name: 'НКО "Спорт на благо"', city: 'Саров, Нижегородская область', category: 'Спорт', description: 'Спортивные проекты', phone: '+7 (925) 678-90-12', website: 'www.sport-blagо-nko.ru', image: '🏋️' },
  { id: 27, name: 'НКО "Помощник"', city: 'Саров, Нижегородская область', category: 'Социальная помощь', description: 'Социальные услуги', phone: '+7 (926) 789-01-23', website: 'www.pomoschnik-nko.ru', image: '🆘' },
  { id: 28, name: 'НКО "Мастерская"', city: 'Саров, Нижегородская область', category: 'Искусство', description: 'Творческие мастерские', phone: '+7 (927) 890-12-34', website: 'www.masterskaya-nko.ru', image: '🎨' },
  { id: 29, name: 'НКО "Экология"', city: 'Саров, Нижегородская область', category: 'Экология', description: 'Экологические проекты', phone: '+7 (928) 901-23-45', website: 'www.ekologiya-nko.ru', image: '🌿' },
  { id: 30, name: 'НКО "Забота"', city: 'Саров, Нижегородская область', category: 'Социальная помощь', description: 'Помощь нуждающимся', phone: '+7 (929) 012-34-56', website: 'www.zabota-nko.ru', image: '🤲' },
];

// ==================== РАЗДЕЛЫ БАЗЫ ЗНАНИЙ ====================
export let knowledgeSections = [
  { id: 1, title: 'Основы волонтёрства', sphere: 'Обучение', icon: '📚' },
  { id: 2, title: 'Работа с НКО', sphere: 'Практика', icon: '🤝' },
  { id: 3, title: 'Первая помощь', sphere: 'Здоровье', icon: '⚕️' },
  { id: 4, title: 'Экологические проекты', sphere: 'Экология', icon: '🌱' },
  { id: 5, title: 'Социальная помощь', sphere: 'Социум', icon: '❤️' },
  { id: 6, title: 'Социальная помощь детям', sphere: 'Социум', icon: '❤️' },
];

// ==================== ВИДЕО В БАЗЕ ЗНАНИЙ ====================
export let knowledgeVideos = [
  { id: 1, section_id: 1, title: 'Что такое волонтёрство', vk_url: '194994222_456239405' },
  { id: 2, section_id: 1, title: 'Как начать волонтёрить', vk_url: '171236832_171236833' },
  { id: 3, section_id: 1, title: 'Волонтёр: истории людей', vk_url: '171236832_171236834' },
  { id: 4, section_id: 2, title: 'Структура НКО', vk_url: '171236832_171236835' },
  { id: 5, section_id: 2, title: 'Как работает некоммерческая организация', vk_url: '171236832_171236836' },
  { id: 6, section_id: 3, title: 'Основы ПМП для волонтёров', vk_url: '171236832_171236838' },
];

// ==================== ФУНКЦИИ ДЛЯ РАБОТЫ С НКО ====================

export function addNKO(nkoData) {
  const newId = Math.max(...nkoList.map(n => n.id), 0) + 1;
  const newNKO = {
    id: newId,
    ...nkoData,
  };
  nkoList.push(newNKO);
  return newNKO;
}

export function deleteNKO(id) {
  nkoList = nkoList.filter(n => n.id !== id);
  return true;
}

export function updateNKO(id, nkoData) {
  const index = nkoList.findIndex(n => n.id === id);
  if (index !== -1) {
    nkoList[index] = { ...nkoList[index], ...nkoData };
    return nkoList[index];
  }
  return null;
}

export function getAllNKO() {
  return nkoList;
}

export function getNKOByCity(city) {
  return nkoList.filter(n => n.city === city);
}

// ==================== ФУНКЦИИ ДЛЯ РАБОТЫ С ВИДЕО ====================

export function addVideo(videoData) {
  const newId = Math.max(...knowledgeVideos.map(v => v.id), 0) + 1;
  const newVideo = {
    id: newId,
    ...videoData,
  };
  knowledgeVideos.push(newVideo);
  return newVideo;
}

export function deleteVideo(id) {
  knowledgeVideos = knowledgeVideos.filter(v => v.id !== id);
  return true;
}

export function updateVideo(id, videoData) {
  const index = knowledgeVideos.findIndex(v => v.id === id);
  if (index !== -1) {
    knowledgeVideos[index] = { ...knowledgeVideos[index], ...videoData };
    return knowledgeVideos[index];
  }
  return null;
}

export function getVideosBySection(sectionId) {
  return knowledgeVideos.filter(v => v.section_id === sectionId);
}

export function getAllVideos() {
  return knowledgeVideos;
}

// ==================== ФУНКЦИИ ДЛЯ РАБОТЫ С РАЗДЕЛАМИ ====================

export function addSection(sectionData) {
  const newId = Math.max(...knowledgeSections.map(s => s.id), 0) + 1;
  const newSection = {
    id: newId,
    ...sectionData,
  };
  knowledgeSections.push(newSection);
  return newSection;
}

export function deleteSection(id) {
  knowledgeSections = knowledgeSections.filter(s => s.id !== id);
  knowledgeVideos = knowledgeVideos.filter(v => v.section_id !== id);
  return true;
}

export function getAllSections() {
  return knowledgeSections;
}