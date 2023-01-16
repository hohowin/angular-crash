import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';
// import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private backendUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.backendUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.backendUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
