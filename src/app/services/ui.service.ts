import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    //updates the task using the subject
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    //makes sure to update live
    return this.subject.asObservable();
  }
}
