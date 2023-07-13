import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private completeTask: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    //updates the task using the subject
    this.subject.next(this.showAddTask);
  }

  toggleCompleteTask(): void {
    this.completeTask = !this.completeTask;
    this.subject.next(this.completeTask);
  }

  onToggle(): Observable<any> {
    //makes sure to update live
    return this.subject.asObservable();
  }
}
