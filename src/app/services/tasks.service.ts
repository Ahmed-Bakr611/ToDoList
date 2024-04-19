import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { title } from 'process';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Task[]=[]

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
}

addTask(task: Task): void {
    this.tasks.push(task);
}

updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
        this.tasks[index] = updatedTask;
    }
}

deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
}

getTaskById(taskId: number): Task | undefined {
    return this.tasks.find(task => task.id === taskId);
}


}
