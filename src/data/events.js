/**
 * Тестовые данные каталога. Поля соответствуют входным данным компонента EventCard
 * (см. docs/decomposition.md). С ПР №2 карточки будут отрисовываться из этого массива.
 * @typedef {object} CampusEvent
 * @property {string} id
 * @property {string} title
 * @property {string} category
 * @property {string} startsAt ISO-дата и время начала
 * @property {string} location
 * @property {'offline' | 'online'} format
 * @property {'all' | 'beginner' | 'advanced'} level
 * @property {number} seatsLeft
 * @property {number} seatsTotal
 * @property {boolean} isFavorite
 */

/** @type {CampusEvent[]} */
export const events = [
  {
    id: 'semantic-html',
    title: 'Семантический HTML',
    category: 'Frontend',
    startsAt: '2026-09-18T16:00',
    location: 'ауд. 304',
    format: 'offline',
    level: 'all',
    seatsLeft: 18,
    seatsTotal: 40,
    isFavorite: false,
  },
  {
    id: 'git-basics',
    title: 'Git без страха',
    category: 'Инструменты',
    startsAt: '2026-09-19T14:30',
    location: 'online',
    format: 'online',
    level: 'beginner',
    seatsLeft: 8,
    seatsTotal: 30,
    isFavorite: true,
  },
  {
    id: 'ux-review',
    title: 'UX-разбор интерфейсов',
    category: 'UX/UI',
    startsAt: '2026-09-21T17:00',
    location: 'коворкинг',
    format: 'offline',
    level: 'all',
    seatsLeft: 5,
    seatsTotal: 20,
    isFavorite: false,
  },
  {
    id: 'rest-api',
    title: 'REST API на практике',
    category: 'Backend',
    startsAt: '2026-09-23T15:00',
    location: 'ауд. 211',
    format: 'offline',
    level: 'advanced',
    seatsLeft: 14,
    seatsTotal: 30,
    isFavorite: false,
  },
  {
    id: 'dev-portfolio',
    title: 'Портфолио разработчика',
    category: 'Карьера',
    startsAt: '2026-09-25T18:00',
    location: 'online',
    format: 'online',
    level: 'all',
    seatsLeft: 32,
    seatsTotal: 50,
    isFavorite: false,
  },
  {
    id: 'web-a11y',
    title: 'Доступность в вебе',
    category: 'Frontend',
    startsAt: '2026-09-27T13:00',
    location: 'ауд. 118',
    format: 'offline',
    level: 'beginner',
    seatsLeft: 10,
    seatsTotal: 25,
    isFavorite: true,
  },
];
