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

`https://dev.to/franklin030601/code-splitting-in-react-js-4o2g`

Professional Experience:

Full Stack Developer | [Company Name]
City, State | [Dates of Employment]

Led the development of [key projects], resulting in a [specific outcome, e.g., "30% increase in user engagement"].
Utilized React and Redux to create dynamic and responsive user interfaces.
Developed RESTful APIs with Node.js and Express, integrating third-party services and ensuring secure data transactions.
Implemented database solutions using PostgreSQL, ensuring high availability and performance.
Collaborated with cross-functional teams to define project requirements and deliver solutions aligned with business goals.
Conducted code reviews and mentored junior developers, fostering a collaborative and knowledge-sharing environment.
Utilized Docker and Kubernetes for containerization and orchestration of applications, ensuring consistent deployment environments.
Web Developer | [Previous Company Name]
City, State | [Dates of Employment]

Designed and developed interactive web applications using HTML, CSS, JavaScript, and frameworks like Angular and Vue.js.
Built and maintained server-side logic with Python and Django, focusing on performance optimization and scalability.
Developed and consumed RESTful APIs and GraphQL endpoints for seamless data exchange.
Integrated CI/CD pipelines using Jenkins and GitLab CI, automating build, test, and deployment processes.
Collaborated closely with UX/UI designers to ensure the technical feasibility of designs and enhance user experiences.
Conducted unit testing and debugging to ensure high code quality and reliability.
Junior Developer | [Company Name]
City, State | [Dates of Employment]

Assisted in the development of web applications using PHP and Laravel.
Contributed to front-end development with jQuery and Bootstrap, improving the responsiveness and functionality of web pages.
Participated in database design and management using MySQL.
Assisted in the maintenance and updates of existing web applications, ensuring security and performance enhancements.
Collaborated with team members to troubleshoot and resolve software issues.
Education:

Bachelor of Science in Computer Science | [University Name] | [Year of Graduation]
[Any relevant certifications, e.g., "Certified Scrum Master (CSM)", "AWS Certified Solutions Architect"]
Technical Skills:

Front-End: HTML, CSS, JavaScript, React, Angular, Vue.js, Redux, Bootstrap
Back-End: Node.js, Express, Python, Django, PHP, Laravel
Databases: SQL, PostgreSQL, MySQL, MongoDB
Tools & Platforms: Docker, Kubernetes, Jenkins, GitLab CI, AWS, Azure
Other: RESTful APIs, GraphQL, CI/CD, Agile methodologies, TDD/BDD
Projects:

[Project Name]: Description of the project, technologies used, and the impact or outcome.
[Project Name]: Description of the project, technologies used, and the impact or outcome.
Professional Affiliations:

Member of [relevant professional organizations, e.g., "Association for Computing Machinery (ACM)"]
Active contributor to [relevant open source projects or communities]
Languages:

English (fluent)
[Other languages, if applicable]

```
Excel and Advance Excel ,
Pivot table,report,sumif,countif
```

https://www.freecodecamp.org/news/learn-flexbox-build-5-layouts/

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

Responsibilities include development, styling and deployment of React based web pages on a full stack NodeJS based REST & GraphQL based backend
Enthusiasm for everything JavaScript
Knowledge of the NPM ecosystem
4 year track record in React/node JS or both
CSS skills
love of thoroughly tested code with a tool like Jest, mocha, ava, tap, Jasmine
Ability to configure a project with Webpack and babel
working experience with eslint, prettier and quality tools for the JS ecosystem
Hands on use of Rest, GraphQL, ExpressJS
Understanding of recent JS developments, expecially with respect to the React ecosystem
