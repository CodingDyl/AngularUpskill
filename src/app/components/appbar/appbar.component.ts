import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent {
  @ViewChild('clickHoverMenuTrigger') clickHoverMenuTrigger!: MatMenuTrigger;

  openOnMouseOver() {
    this.clickHoverMenuTrigger.openMenu();
  }

  closeOnMouseOver() {
    this.clickHoverMenuTrigger.closeMenu();
  }
}
