# pawa-task

This is test assignment for FE developer Please implement a simple todo list application called "pawaTask" that keeps
track of your time.

[View prototype](https://icvmmk.axshare.com/prototype.html)

## Roadmap

- [x] Base project structure
    - [x] Use one main layout
    - [x] Other views showing in modals
- [x] Create Views and Components
    - [x] Task list view
    - [x] Task Add|edit
    - [x] Task comments
- [x] VueX store modeling
    - [x] Typings for all entities
    - [x] Save|restore from LocalStorage
    - [ ] Allow clear all data
- [x] App styling
    - [x] Light and dark themes
    - [x] Use theme variables
- [x] DarkMode feature
    - [x] Use device theme
    - [x] Manual toggle allowed
    - [x] Save selected mode
- [x] Unit testing and final refactoring|tuning
    - [x] All views and components have basic unit tests
    - [ ] GitHub actions perform unit tests before build stage
    - [ ] GitHub actions perform build stage on tests successful

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
