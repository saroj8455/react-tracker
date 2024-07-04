# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Provide <Outlet /> when using react children routing eg. navigation links as belw

`http://localhost:5173/about/angular`
`http://localhost:5173/about/vue/10001`

```jsx
{
    path: '/about',
    element: <About />,
    children: [
      {
        path: 'angular',
        element: <AngularTech />,
      },
      {
        path: 'react',
        element: <ReactTech />,
      },
      {
        path: 'vue/:vueId',
        element: <Vue />,
      },
    ],
  },
```

```jsx
<div className='m-0'>
  <Outlet />
</div>
```

# Access params in children component

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Vue() {
  const { vueId } = useParams();
  return <div>Vue: {vueId}</div>;
}
```

## List Item for project work

```jsx
<li className='flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap'>
  <div className='text-500 w-6 md:w-2 font-medium'>Director</div>
  <div className='text-900 w-full md:w-8 md:flex-order-0 flex-order-1'>
    Michael Mann
  </div>
</li>
```

## Code Spliting

`https://dev.to/franklin030601/code-splitting-in-react-js-4o2g` <br>

`https://www.freecodecamp.org/news/learn-flexbox-build-5-layouts/`

## Single Responsiblity Principle in React using useQuery

`npm i @tanstack/react-query`
`https://tkdodo.eu/blog/react-query-error-handling`

## To enable the hot reload, you need to put this configuration in your vite.config.ts

````js
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
```html
  <Card className='mb-2' key={p.id}>
    <h2 className='pb-2 text-indigo-400'>{p.title}</h2>
    <p className='m-0'>
      Price: ${p.price} | Category: {p.category}
    </p>
    <p className='pt-2 text-indigo-200'>{p.description}</p>
  </Card>
````

## Features/Concepts To Learn

- [ ] Understanding the react flow and structure.
- [ ] Why we need hooks and impportant hooks.
- [ ] useEffect, useRef, useCallback and useMemo.
- [ ] Understand on react-router with realtime projects.
- [ ] Context API with local storage.
- [ ] Redux and Redux toolkit go through.
- [ ] CORS and debugging in React.
- [ ] How to deploy react app in .
- [ ] hello

## Handling Observables with NgFor and the Async Pipe
