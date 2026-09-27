# CampusFlow

Учебный веб-сервис для поиска учебных мероприятий: каталог с поиском и фильтрами, страница мероприятия, регистрация на участие.

Практическая работа №1: анализ макета, декомпозиция (`docs/decomposition.md`) и технический фундамент проекта. Реализован семантический HTML-каркас экрана «Каталог».

## Стек

- [Vite](https://vite.dev/) + Vanilla JS (многостраничное приложение)
- ESLint 9 (flat config) — проверка JavaScript
- Stylelint 16 + `stylelint-config-standard` — проверка CSS
- Prettier 3 — единое форматирование JS, CSS, HTML, Markdown, JSON

## Требования

Node.js **20.19+** или **22.12+** (рекомендуется актуальная LTS), npm 10+.

## Установка и запуск

```bash
git clone https://github.com/Qur0na/CampusFlow.git
cd cd CampusFlow
npm install
npm run dev
```

Dev-сервер откроется по адресу, который выведет Vite (обычно http://localhost:5173).

## Команды

| Команда                | Что делает                                                  |
| ---------------------- | ----------------------------------------------------------- |
| `npm run dev`          | запускает dev-сервер с горячей перезагрузкой                |
| `npm run build`        | собирает production-версию в `dist/`                        |
| `npm run preview`      | локально открывает собранную версию из `dist/`              |
| `npm run lint:js`      | проверяет JavaScript через ESLint                           |
| `npm run lint:css`     | проверяет CSS через Stylelint                               |
| `npm run lint`         | обе проверки подряд                                         |
| `npm run lint:fix`     | автоматически исправляет то, что могут исправить линтеры    |
| `npm run format`       | форматирует все файлы через Prettier                        |
| `npm run format:check` | проверяет форматирование без изменения файлов               |
| `npm run check`        | полная проверка перед коммитом: lint + format:check + build |

## Структура

```
campusflow/
├── index.html              # экран «Каталог» (семантический каркас)
├── public/
│   └── favicon.svg         # копируется в сборку как есть
├── src/
│   ├── main.js             # точка входа: подключает стили и инициализирует компоненты
│   ├── components/
│   │   └── favorite-button.js
│   ├── data/
│   │   └── events.js       # тестовые данные мероприятий
│   └── styles/
│       ├── tokens.css      # дизайн-токены из макета (цвета, отступы, радиусы)
│       ├── base.css        # сброс, видимый фокус, .visually-hidden, skip-link
│       └── layout.css      # сетка карточек (mobile-first)
├── docs/
│   └── decomposition.md    # анализ макета и декомпозиция
├── eslint.config.js
├── .stylelintrc.json
├── .prettierrc.json
├── .editorconfig
└── .gitignore
```

Почему так:

1. **HTML-страницы в корне** — так Vite находит точки входа MPA; каждая страница имеет свой URL и работает без JS.
2. **`components/` по ответственности, а не по типу файла** — модуль компонента отвечает за его поведение (`FavoriteButton` меняет `aria-pressed`); стили компонентов добавляются рядом по мере вёрстки.
3. **`data/` отделена от разметки** — поля совпадают с входными данными `EventCard` из декомпозиции; позже массив заменится ответом API без изменения компонентов.
4. **`styles/` разделены по уровням** — токены → база → раскладка → компоненты; токены позволяют менять тему в одном месте.
5. **Без лишнего дробления** — папки `pages/`, `utils/`, `services/` появятся, когда в них будет что положить.

## Как добавить следующий экран

1. Создать `event.html` в корне (скопировать шапку и подвал из `index.html`).
2. Добавить файл `vite.config.js`, чтобы экран попал в сборку:

   ```js
   import { resolve } from 'node:path';
   import { defineConfig } from 'vite';

   export default defineConfig({
     build: {
       rollupOptions: {
         input: {
           main: resolve(import.meta.dirname, 'index.html'),
           event: resolve(import.meta.dirname, 'event.html'),
         },
       },
     },
   });
   ```

## Соглашение о коммитах

[Conventional Commits](https://www.conventionalcommits.org/ru/): `chore:` — настройка, `feat:` — новая функциональность, `style:` — стили, `docs:` — документация, `fix:` — исправление.
