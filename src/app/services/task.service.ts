import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  public listOfTaskNotDone() : Observable<Array<Task>>{
    return this.http.get<Array<Task>>(`${environment.backendHost}/api/v1/Task/getListOfTaskNotDone`);
  }
  public listOfTaskDone() : Observable<Array<Task>>{
    return this.http.get<Array<Task>>(`${environment.backendHost}/api/v1/Task/getListOfTaskDone`);
  }

  public setTaskToDone(id:number) : Observable<Task>{
    return this.http.get<Task>(`${environment.backendHost}/api/v1/Task/setTaskToDone/${id}`);
  }
  public setTaskToNotDone(id:number) : Observable<Task>{
    return this.http.get<Task>(`${environment.backendHost}/api/v1/Task/setTaskToNotDone/${id}`);
  }
}
