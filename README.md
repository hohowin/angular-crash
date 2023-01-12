# angular-crashcourse

- Youtube: [Angular Crash Course](https://youtu.be/3dHNOWTI7H8)
- Docs: https://angular.io/docs

---

## Setup 

### Global Installation

```bash
npm install -g @angular/cli
```

### New App

```bash
ng new angular-crash
```

---

## Dev Server

```bash
yarn start
```
Then go to localhost:4200

---

## Development

### New Component

```bash
ng generate component components/header
ng generate component components/button
ng generate component components/tasks
ng generate component components/task-item

ng generate service services/task
```

### Font Awesome

- https://github.com/FortAwesome/angular-fontawesome

```bash
ng add @fortawesome/angular-fontawesome
```