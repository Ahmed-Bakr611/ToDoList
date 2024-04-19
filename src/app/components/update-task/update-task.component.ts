import { Component,OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../interfaces/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),  // Set default date to current date
    isChecked: false
};

  constructor(
      private route: ActivatedRoute,

      private taskService: TasksService,
      private router: Router
  ) {}

      ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id')!;
        this.task = this.taskService.getTaskById(id) || {
            id: 0,
            title: '',
            description: '',
            dueDate: new Date(),
            isChecked: false,
        };
  }

  saveTask() {
      if (this.task) {
          this.taskService.updateTask(this.task);
          this.router.navigate(['/']);
      }
  }

  cancel() {
      this.router.navigate(['/']);
  }
}
