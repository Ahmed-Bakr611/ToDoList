import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { Task } from '../../interfaces/task';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent  {

  title = '';
  description = '';
  dueDate: Date | null = null;

  constructor(private taskService: TasksService, private router: Router) {}

  addTask(form: NgForm) {
    // Check if the form is valid before adding the task
    if (form.valid) {
        const newTask: Task = {
            id: Date.now(),
            title: form.value.title,  // Use form.value to get the title value
            description: form.value.description,  // Use form.value to get the description value
            dueDate: new Date(form.value.dueDate),  // Convert dueDate to Date object
            isChecked: false,
        };

        // Add the task to the service
        this.taskService.addTask(newTask);

        // Navigate back to the home route
        this.router.navigate(['/']);
    }
  
}
  cancel() {
      this.router.navigate(['/']);
  }
}
