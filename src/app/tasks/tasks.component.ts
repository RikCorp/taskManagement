import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasksNotDone!: Array<Task>;
  tasksDone!: Array<Task>;
  constructor(private taskService:TaskService){}

  ngOnInit():void{
    console.log("***************HERE FOR THE DEBUG*******************");
    this.getListOfTaskNotDone();
    this.getListOfTaskDone();
  }

  getListOfTaskNotDone(){
    this.taskService.listOfTaskNotDone().subscribe({
      next: (data)=>{
        this.tasksNotDone = data;
      }
    })
  }
  getListOfTaskDone(){
    this.taskService.listOfTaskDone().subscribe({
      next: (data)=>{
        this.tasksDone = data;
      }
    })
  }
  setTaskToDone(id: number){
    this.taskService.setTaskToDone(id).subscribe({
      next: (data)=>{
        console.log(data);
        this.getListOfTaskDone();
        this.getListOfTaskNotDone();
      }
    })
  }
  setTaskToNotDone(id: number){
    this.taskService.setTaskToNotDone(id).subscribe({
      next: (data)=>{
        console.log(data);
        this.getListOfTaskDone();
        this.getListOfTaskNotDone();
      }
    })
  }
}
