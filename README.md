# angular-crashcourse

- Youtube: [Angular Crash Course](https://youtu.be/3dHNOWTI7H8)
- Youtube: [Angular application in Docker - Traversy Media Angular Crash Course into Docker Environment](https://youtu.be/_63tyWG7wy0)
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
ng generate component components/add-task

ng generate service services/task
ng generate service services/ui

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

### Add Modules

Add HttpClientModule and FormsModule. E.g: In `app.module.ts` add following:

```javascript
import { FormsModule } from '@angular/forms';

 imports: [
    :
    :
    FormsModule,
  ],
```

### Input & Output

`[]` are for input; `()` are for output; `[()]` are for bi-directional data binding.

### Route

Add `RouterModule` and `Routes` in app.module.ts

```javascript
import { RouterModule, Routes } from '@angular/router';
:
:
const appRoutes: Routes = [
  {path: '', component: TasksComponent },
  {path: 'about', component: AboutComponent },
  {path: 'footer', component: FooterComponent }
];
:
:
RouterModule.forRoot(appRoutes, {enableTracing: true}),
```

In `app.component.html`, add `<router-outlet></router-outlet>` instead of `<app-tasks></app-tasks>`

In `about.component.html`, add `<a routerLink="/">Go Back</a>`

### Environment Variables

1\. Create environment files under src

2\. In `task.service.ts`, use `environment.domain` instead.

3\. In `angular.json`, update the `configurations` and `serve` section correspondingly.

4\. Update `package.json` scripts.

### Dev Docker

For frontend:

```bash
docker run --rm -p 4200:4200 $(docker build -q -f Dockerfile.dev .)
```

For backend, go to `json-server` dir:

```bash
docker run --rm -p 5000:5000 $(docker build -q .)
```

---

## Production

### Build Images

```bash
docker build -t angular-crash:0.1 .
```

### Start Server

```bash
docker-compose up -d
```

---

## Try it out

Try:
- delete task
- toggle task
- add task