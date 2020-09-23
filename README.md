# Тестовое задание для компании «ЛИИС Инженерные решения» на должность Front-end разработчика
<br />
Задание:

Сделать список вылетов (города вылета/прилета захардкожены: Москва/Нью-Йорк) и карточка рейса. Из списка вылетов можно добавлять рейсы в избранные (появятся во вкладке Favourites). Более подробное описание интерфейса находится в [макете](https://www.figma.com/file/xrBAndVOBAnVqC8cwLkvHK/React-Native?node-id=0%3A1).

Можно использовать любые библиотеки. Картинки в карусели хранятся локально. Все данные, которых, вдруг нет в ответе от API - можно захардкодить.

Используйте Expo чтоб поднять приложение. Для глобального стейта - Redux, для асинхронных действий - Redux Saga.

<br />

## Комментарии к приложению
Приложение сконфигурировано для запуска **только на эмуляторе Android-смартфона!** 
В качестве источника данных с сервера было создано фейковое REST API с помощью JSON Server.

Скачать на локальный компьютер:

### `git clone https://github.com/mihalichpalich/liis_task.git`

Порядок установки и запуска:
1. Серверная часть:
### `cd server && npm i && npm start`
2. Клиентская часть (выполнить в отдельной вкладке терминала):
### `cd client && expo install && expo start --android`

<br />

## Стек технологий
* Expo 36.0.1
* React Native 0.61
* React Navigation 4.3.1
* styled-components
* Redux
* Redux-Saga
* axios
