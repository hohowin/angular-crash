import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../Task';
// import { TASKS } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private endpoint = 'tasks';
  private domain: string | undefined;
  private backendUrl: string | undefined;

  constructor(private http: HttpClient) {
    this.domain = environment.domain;
    this.backendUrl = `${this.domain}/${this.endpoint}`;
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.backendUrl}`);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.backendUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.backendUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.backendUrl}`, task, httpOptions);
  }
}
