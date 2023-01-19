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

### Angular Dev Server

```bash
yarn start
```
Then go to localhost:4200

### Json Dev Server

```bash
yarn server
```

---

## Development

### New Component

```bash
ng generate component components/header
ng generate component components/button
ng generate component components/tasks
ng generate component components/task-item

ng generate service services/task

# Local Server (not for production)
npm install json-server
# In Package Script add
# "server": "json-server --watch db.json"
# After started the server, can try http://localhost:5000/tasks
```

### Font Awesome

- https://github.com/FortAwesome/angular-fontawesome

```bash
ng add @fortawesome/angular-fontawesome
```

---

## Try it out

Try:
- delete task
- toggle task