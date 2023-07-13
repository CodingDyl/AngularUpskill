import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faCheck = faCheck;
  faRotateRight = faRotateRight;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onCompleteTask: EventEmitter<Task> = new EventEmitter();
  ngOnInit() {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  onComplete(task: Task) {
    this.onCompleteTask.emit(task);
  }
}
