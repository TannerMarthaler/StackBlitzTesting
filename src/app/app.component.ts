import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = '';

  isEmpty(): boolean {
    return this.username == '';
  }

  changeUsername(): void {
    this.username = 'Hello World';
  }

  clearUsername(): void {
    this.username = '';
  }

  setUsername(uName: string): void {
    this.username = uName;
  }
}
