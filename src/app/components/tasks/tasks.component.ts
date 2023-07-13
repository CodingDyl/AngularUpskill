import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  tasksComplete: number = 0;
  constructor(private taskService: TaskService) {};
  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }


  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id 
      !== task.id)));
    this.updateCompletedTasks(task.complete, 'delete');
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService
    .updateTaskReminder(task).subscribe();
  }

  toggleComplete(task: Task) {
    task.complete = !task.complete;
    this.taskService
    .updateComplete(task)
    .subscribe();
    if (task.reminder == true) {
      this.toggleReminder(task);
    }
    this.updateCompletedTasks(task.complete, 'toggle');
  }

  updateCompletedTasks(complete: Boolean, from: string) {
    if (complete == true && from == 'toggle') {
      this.tasksComplete += 1;
    } else {
      this.tasksComplete -= 1;
    }
  }

  addTask(task: Task) {
    this.taskService
    .addTask(task)
    .subscribe((task) => (this.tasks.push(task)));
  }

  deleteCompletedTasks(): void {
    for (let index = 0; index < this.tasks.length; index++) {
      if (this.tasks[index].complete == true) {
        this.deleteTask(this.tasks[index]);
      }
    }
  }
}
