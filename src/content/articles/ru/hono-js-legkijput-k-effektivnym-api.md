---
title: "Hono.js: Легкий Путь К Эффективным API"
description: "Первая статья о Hono.js в российском IT-сообществе"
date: "Aug 26 2024"
tags: ["hono.js", "bun", "backend", "testing", "middleware"] 
topic: Software Development
author: GoGagoo
cover_url: "/setting-up-a-nuxt-3-project-with-eslint-typescript-and-tailwindcss.png"
type: article
---

# Hono.js: Легкий Путь к Эффективным API

Когда речь идет о разработке простого бэкенда, то в голову приходит Express.js. Однако в 2024 году он считается устаревшим, так как есть шустрые альтернативы. Приветствую вас, дорогие читатели и сегодня расскажу о Hono.js.

Hono.js — маленькой, простой и сверхбыстрый фрейморк, построенной на веб-стандартах. Под его капотом поддержка TypeScript и комфортная разработка в локальной среде. Hono.js работает в разных рантаймах JavaScript: _Cloudflare \_Workers, Deno, Bun, Vercel, Netlify,_ в том числе и _Node.js_.

Hono.js решает проблему разработки высокопроизводительных и легковесных веб-приложений, минимизируя накладные расходы и сложность. Многие разработчики сталкиваются с тем, что популярные фреймворки, такие как Express.js или Koa.js, хотя и предоставляют широкие возможности, бывают избыточными и тяжелыми для простых задач, особенно в проектах, где важна производительность и минимализм. Собственно Hono.js ориентирован на решение этих проблем, предлагая ультралегкий фреймворк, с помощью которого быстро создаются серверные приложения без лишних зависимостей и с минимальным кодом.

## Особенности Hono.js

### Легковесность

Hono.js выделяется легковесностью — это один из самых компактных веб-фреймворков на рынке. Размер его исходного кода минимален, что даёт возможность значительно снизить накладные расходы при его использовании. В отличие от крупных фреймворков, Hono.js не загружен множеством встроенных модулей и функций, которые могут быть избыточными для небольших проектов. Для сравнения Express.js, который весит 2 МБ, Hono.js весит всего лишь 14 КБ.

### Простота использования

Hono.js построен на простых и интуитивных концепциях, что делает его легким в освоении и использовании даже для новичков. Он минималистичен, но при этом предоставляет все основные функции, необходимые для создания веб-приложений, такие как маршрутизация, обработка запросов и ответы, поддержка middleware и работа с параметрами URL.

Ниже представлен простой пример минимального приложения на Hono.js.:

```ts
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

export default app
```

Если тоже самое написать на Express.js, выйдет многозатратно:

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(Example app listening on port ${port})
})
```

Думаю, вам нравится Hono.js, но это ещё не всё, впереди много интересного. Теперь перейдем к его установке и начальной настройки. В качестве рантайма буду использовать Bun.js.

---

## Установка и начальная настройка

1. Инициализация проекта и создание простого сервера
   На старте буду использовать Bun для инициализации проекта:

```bash
bun init
```

Перед тем, как перейдем к Hono.js, давайте создадим простой HTTP-сервер через Bun в index.tsx:

```ts
// index.tsx
Bun.serve({
	fetch: (req) => {
		return new Response('Hello from Bun!')
	},
	port: process.env.PORT || 3030,
})
```

![Вывод ответа на 3030-ом порту](https://habrastorage.org/r/w1560/getpro/habr/upload_files/8c5/669/7f9/8c56697f9089d3f06137a436ba8a2c84.png)

### 2) Установка и подключение Hono.js

После инициализации проекта сразу же и установим Hono.js :

```bash
bun i hono
```

Подключаем Hono и пишем GET-запрос на получение ответа в виде простого JSON, чутка меняя то, что написали через Bun:

```ts
// index.tsx
import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
	return c.json({ hello: 'world' })
})

Bun.serve({
	fetch: app.fetch,
	port: process.env.PORT || 3030,
})
```

Таким образом, мы избавляем пользовательскую функцию, передав это всё Hono. Теперь HTTP-запросы, поступающие на сервер Bun, будет обрабатываться этой платформой, что нам дает гораздо удобное API:
![Ответ на том же порту](https://habrastorage.org/r/w1560/getpro/habr/upload_files/3e3/aeb/82a/3e3aeb82a4e3d4f41eed60ed168c9a9d.png)

### 3) Групповая маршрутизация Hono.js

Следуя по офиц. документации Hono.js , можно увидеть раздел огрупповом роутинге, с помощью которого группируются маршруты через экземпляр Hono и добавлять их в основное приложение методом route.

Создадим books.ts и воспользуемся примером оттуда. Не забудем экспортировать book по умолчанию:

```ts
// routes/books.ts
import { Hono } from 'hono'

const book = new Hono()

book.get('/', (c) => c.text('List Books')) // GET /book
book.get('/:id', (c) => {
	// GET /book/:id
	const id = c.req.param('id')
	return c.text('Get Book: ' + id)
})
book.post('/', (c) => c.text('Create Book')) // POST /book

const app = new Hono()
app.route('/book', book)

export default book
```

Далее импортируем bookRouter из book.ts и воспользуемся ним следующим образом. конечном итоге прилетает ответ списка книг:

```ts
// index.tsx
app.route('/book', bookRouter)
```

!["Список" книжек на /book](https://habrastorage.org/r/w1560/getpro/habr/upload_files/21b/fae/f89/21bfaef897d2745cf8be2522bfa442d8.png)

### 4) Что же за "c" в аргументах???

Однако, как вы могли заметить, вместо req используется c , что сокращенно означает объект context . Об этом написано в документации Hono.js .

По факту все исходящие и входящие данные обрабатываются данным объектом. Hono дает возможность возвращать ответы не только через json-формат, но и множеством других (например, html-формат).

### 5) Middleware

Middleware работает перед/после обработчика. Мы можем получить запрос до диспатча или манипулировать ответом после диспатча:

```ts
// index.tsx
import { logger } from 'hono/logger'

app.use('*', logger())
```

Выполняя различные запросы, в консоли редактора VS Code можно увидеть, как описывается то, что отправляется и что мы получаем с статусом кода:
![Отображение запросов и их ответов со статусом кода](https://habrastorage.org/r/w1560/getpro/habr/upload_files/0f9/250/207/0f9250207779e7a701ca92e5d383b848.png)

### 5) Рендеринг JSX

Хотя hono/jsx работает на клиенте, его также можно использовать его при рендеринге контента на стороне сервера

В разделе про JSX есть пример функционального React-компонента, попробуем с ней отрендрить на стороне сервера:

```ts
// page.tsx

import { Hono } from 'hono'
import type { FC } from 'hono/jsx'

const app = new Hono()

const Layout: FC = (props) => {
	return (
		<html>
			<body>{props.children}</body>
		</html>
	)
}

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
	return (
		<Layout>
			<h1>Hello Hono!</h1>
			<ul>
				{props.messages.map((message) => {
					return <li>{message}!!</li>
				})}
			</ul>
		</Layout>
	)
}

export default Top
```

Далее в конфиге TypeScript необходимо изменить некоторые настройки, чтобы JSX заработал:

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "hono/jsx",
}
```

Импортируем компонент <Top /> в корневой файл и отрендрим простенькую разметку:

```ts
// index.tsx
import Top from './page.tsx'

app.get('/', (c) => {
	const messages = ['Good Morning', 'Good Evening', 'Good Night']
	return c.html(<Top messages={messages} />)
})
```

![Рендер со стороны сервера](https://habrastorage.org/r/w1560/getpro/habr/upload_files/5fe/e49/771/5fee497714c7232321c6d1cca0e7a8fd.png)

Это напоминает SSR в Next.js или Remix.js, но это решение является легким. Hono так же поддерживает и другие фичи, например асинхронные компоненты, Suspense и тд.

6. Тестирование
   Тестирование — это важно, но протестировать приложения Hono — несложно. Способ создания тестовой среды отличается в каждой среде выполнения, но основные шаги одинаковы. Перейдем непосредственно к тестированию.

Для удобства я вынесу код в отдельный файл app.tsx .

```ts
// index.test.ts
import { expect, test, describe } from 'bun:test'
import app from './app'

describe('Example', () => {
	test('GET /posts', async () => {
		const res = await app.request('/hello')
		expect(res.status).toBe(200)
		expect(await res.json()).toEqual({ hello: 'world' })
	})
	expect(2 + 2).toBe(4)
})
```

```ts
// index.tsx
import app from './app'

Bun.serve({
	fetch: app.fetch,
	port: process.env.PORT || 3030,
})
```

В журнале консоли вводим команду для того, чтобы посмотреть, прошли ли тесты или нет:

![Тесты пройдены!](https://habrastorage.org/r/w1560/getpro/habr/upload_files/b61/d83/2ca/b61d832ca33b3cb0aa3b5d42c17505c8.png)

Таким образом, легко и просто можно протестировать своё API.

---

Удивительно, что Hono.js, став достаточно популярным в этом году, не освещен в российском сегменте, так как про него практически никаких статей и видео. Так что вы можете пересмотреть для себя отличную альтернативу над Express.js.

В Hono.js есть много всего, но в этом вы можете убедиться самостоятельно: валидация, RPC, Best Practices и многое другое.

До скорых встреч, спасибо за внимание. Надеюсь, вам понравилась моя статья, для меня это очень важно!

Полезные ссылки:

Официальный сайт Hono.js — https://hono.dev
