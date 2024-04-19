import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Router } from '@angular/router';
import { Task } from '../../interfaces/task';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,AddTaskComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TasksService, private router: Router) {}

  ngOnInit() {
      this.tasks = this.taskService.getTasks();
  }

  toggleTaskCompletion(task: Task) {
      task.isChecked = !task.isChecked;
  }

  deleteTask(task: Task) {
      this.taskService.deleteTask(task.id);
      this.tasks = this.taskService.getTasks();
  }

  navigateToUpdate(task: Task) {
      this.router.navigate(['/update-task', task.id]);
  }

  navigateToAddTask() {
      this.router.navigate(['/add-task']);
  }

}
