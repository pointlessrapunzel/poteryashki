# Потеряшки.ру

Проект создан с помощью [Next.js](https://nextjs.org/).

Чтобы запустить, нужно установить зависимости: `yarn` или `npm install`. Node.js 16+ должно быть достаточно.

## Скрипты

- `yarn dev` - Cервер для разработки на http://localhost:3000.

- `yarn build` - Оптимизированная сборка в прод. режиме.

- `yarn start` - Запуск сервера в прод. режиме.

[Документация по командам Next.js](https://nextjs.org/docs/api-reference/cli#production)
[Документация по деплойменту](https://nextjs.org/docs/deployment)

- `yarn build:static` - Статический экспорт HTML ([SSG](https://nextjs.org/docs/advanced-features/static-html-export)). Минимизирует и собирает HTML и остальные части приложение в папку `./out`, которую можно подавать с любого сервера, например:

```
npx serve ./out
```

В этом режиме нет оптимизации картинок, поэтому лучше запускать на Node.js сервере с помощью `next start`.
