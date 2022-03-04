import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'my-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user: User;
  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }
  ngOnInit() {}

  sidebarExpanded = true;
  isExpanded = 'sidebarExpanded';
  toggleSidebar() {
    'sidebarExpanded = !sidebarExpanded';
  }
  handleSidebarToggle = this.sidebarExpanded;

  // @Input() isExpanded: boolean = false;
  // @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  // handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  clearLS() {
    localStorage.setItem('wsuser', 'null');
  }
  logout() {
    this.authenticationService.logout();
  }

  
}
