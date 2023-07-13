import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  complete: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  constructor(private uiService: UiService) {
    this.uiService
    .onToggle()
    .subscribe((value) => this.showAddTask = value);
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    if (!this.day) {
      alert('Please add a day & time');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      complete: this.complete
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
    this.complete = false;
    
    this.uiService.toggleAddTask();
  }
}
