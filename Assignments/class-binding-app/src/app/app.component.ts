import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'class-binding-app';
}

import { Component } from '@angular/core';

// Define the User class
class User {
  constructor(public name: string, public email: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Create an instance of the User class with default values
  user: User = new User('John Doe', 'johndoe@example.com');
}
