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
  constructor(private taskService: TaskService) {};
  ngOnInit() {
    //not used as an obersevable
    //this.tasks = this.taskService.getTasks();

    //if an observable is used
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
