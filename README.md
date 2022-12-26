# Vue Project Template

This template includes everything you need to get a jump start on your next Vue project.  

This project features...

- [Vue 3](https://vuejs.org)
- [Pinia](https://vuejs.org/) (New default state management library over Vuex)
- [Vite](https://vitejs.dev/)
- [Tailwind](https://tailwindcss.com/)

## Getting started

```sh
git clone https://github.com/Raghav-Sahai/vue-project-template.git
cd vue-project-template
npm install
npm run dev
```

A local development server will start on port [5173](http://localhost:5173/).

To kill the development server, simply press `control + c` in the terminal where the project is running.

## Testing

For testing, this project is configured to use [Vitest](https://vitest.dev/), a vite native unit testing framework.

To run tests:

```sh
npm run test:unit
```

To run tests in watch mode:

```sh
npm run test:unit:watch
```

## Formatting and linting

[Prettier](https://prettier.io/) and [eslint](https://eslint.org/) are used to handle code formatting and linting.

To format the code:

```sh
npm run format
```

To lint the code:

```sh
npm run lint
```

## Pre-commit

Pre-commit hooks are set up using [husky](https://typicode.github.io/husky/#/)

Husky is configured to run three commands before each commit:

```sh
npm run test:unit
npm run lint
npm run format
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?
