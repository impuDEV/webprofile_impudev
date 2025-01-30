# React Application (project template) -> change title
### Шаблон для старта разработки комплексного WEB приложения. Взаимодействие с backend через API.
- построен на технологиях React в соответствии методологии [Feature Sliced Design](https://feature-sliced.design/docs)
- используется машина состояний на базе библиотек Redux/Toolkit

---

## Запуск проекта
```shell
npm install - установка зависимостей
```

## Скрипты

- `npm start` - Запуск frontend проекта на webpack dev server
- `npm run build:prod` - Сборка в режиме prod
- `npm run build:dev` - Сборка в режиме dev (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Архитектура проекта

(соответствует архитектуре - [feature sliced design](https://feature-sliced.design/docs)

## Поддержка локализации. Работа с переводами

Используется библиотека `i18next`. Файлы с переводами хранятся в public/locales

Для удобства работы рекомендуется установить плагины среды разработки (Webstorm - `i18n support`, `Easy I18n`)

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

## Поддержка адаптивного дизайна страниц.

Используется хук из [react-responsive](https://www.npmjs.com/package/react-responsive)
возвращает булево значение соответствия заданным параметрам экрана выводимого приложения 

----

## Тесты

В проекте используется:
1) Тесты на компоненты с React testing library и обычные unit тесты на jest - `npm run test:unit`
2) Скриншотное тестирование с loki - `npm run test:ui`  и подтверждение скриншотов - `npm run test:ui:ok`

Подробнее о тестах - [документация тестирования](./docs/tests.md)

----

## Линтинг

Используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

#### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----

## Конфигурация проекта

Для сборки проекта сконфигурирован [Webpack](./docs/configs/webpack.md)

### Вся конфигурация хранится в:
- `/config/build` - Декомпозиция webpack конфигурации


- `/tsconfig.json` - typescript
- `/.eslintrc.js` - eslint
- `/.stylelintrc.json` - stylelint


- `/shared/config/i18n.ts` - конфигурация библиотеки локализации
- `/shared/config/i18nForTests.ts` - конфигурация моковой локализации для тестирования поддерживающих языки компонент  

---
## Важные папки проекта
- `src` - Исходный код проекта
- `public` - используемые файлы контента:
  - HTML шаблон куда осуществляется сборка проекта
  - locales - папки с переводами
- `src/shared/assets` - медиа контент используемый в проекте
- `src/shared/lib/hooks` - кастомные хуки для нужд проекта

----

## Функционал (features)

