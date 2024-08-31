import { Component } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  username!: string;
  constructor(private sharedLibService: SharedLibService) {
    this.username = this.sharedLibService.user;
    console.log(this.sharedLibService.user);
  }
}
