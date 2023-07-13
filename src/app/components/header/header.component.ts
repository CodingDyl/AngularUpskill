import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myDate = new Date();

  getMonth(): string {
    switch ( this.myDate.getMonth() ) 
    {
      case 0:
        return "January"
        break;
      case 1:
        return "Febuary"
        break;
      case 2:
        return "March"
        break;
      case 3:
        return "April"
        break;
      case 4:
        return "May"
        break;
      case 5:
        return "June"
        break;
      case 6:
        return "July"
        break;
      case 7:
        return "August"
        break;
      case 8:
        return "September"
        break;
      case 9:
        return "October"
        break;
      case 10:
        return "November"
        break;
      case 11:
        return "December"
        break;
      default:
        return "Unknown"
    }
  } 

  title: string = this.myDate.getDate().toString() + " " + this.getMonth() + " " + this.myDate.getFullYear().toString();
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router ) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {

  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
