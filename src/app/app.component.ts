import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbAccordionToggle, NgbCollapse, NgbCollapseModule, NgbModal, NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbCollapse, NgbModule, CommonModule, NgbCollapseModule, NgbNav, NgbAccordionToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'liebing-web';
  toggleNavbar:boolean = false

  toggleNavbarOnClick(){
    this.toggleNavbar = !this.toggleNavbar
    console.log("toggle clicked")
  }
}
