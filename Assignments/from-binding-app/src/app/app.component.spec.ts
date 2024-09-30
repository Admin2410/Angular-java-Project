import { Component } from '@angular/core';

// Define the User class
class User {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Create a user object to bind to the form
  user: User = new User('', '', '');

  // Method to handle form submission
  onSubmit() {
    console.log('Form Submitted');
    console.log('User:', this.user);
  }
}
