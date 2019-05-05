HypeRouter

# Как поставить
```bash
npm i
```

# Ядро
## Что надо знать
- Основы React https://reactjs.org/docs/hello-world.html
- React context https://reactjs.org/docs/context.html
- React hooks https://reactjs.org/docs/hooks-overview.html
- Синтаксис typescript https://www.typescriptlang.org/

## Куда смотреть
- Router/ctx.ts
- Router/HistoryRouter.tsx
- Router/Route.tsx
- Router/Link.tsx

## Полезные выводы
- В реакте принято пользоваться контекстом и колбеками, а не событиями и шинами для них. тогда и код проще
- Компоненты это не только про отображение
- Композиция решает
- По Link.tsx можно понять (условие клика, сквозные пропсы), почему лучше использовать библиотеки и читать код опенсорса, а не велосипедить в слепую (всегда найдутся нюансы)
- Если разбивать контексты по частоте \ причине обновления можно избежать того, что, например ссылки перерендериваются каждую смену страницы
- Хуки топ

# Продвинутое
## Что надо знать
- React context https://reactjs.org/docs/legacy-context.html#how-to-use-context
- React hooks

## Куда смотреть
- Router/MemoryRouter.ts
- Router/AsyncRoute.tsx
- Router/Redirect.tsx
- Router/Switch.tsx

## Полезные выводы
- Контекст разделяет провайдера и потребителя, а потому их можно подменять свободно (MemoryRouter.ts)
- Для решения особых задач отлично заходит кастомный хук (NavLink.ts и Route.tsx)
- Код сплиттинг в 2019 -- легко (AsyncRoute.tsx, About.tsx, ChunkyPage.tsx) (Slow 3G выключенный после загрузки Home -- ваш лучший друг для того чтобы посмотреть на loading...)
- Композиция решает (ну вы поняли: AsyncRoute, Redirect)
- Композицией не надо злоупотреблять (как упражнение перепишите NavLink.ts на использование Route)
- Хуки топ )))
- Если вы используете React для конфигурации, React.Children + child.props ваши лучшие друзья (да, в реакте есть только пропсы) (см. Switch.tsx)