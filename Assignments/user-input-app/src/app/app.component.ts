import { Component } from '@angular/core';

// Define the User interface or class
interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Initialize the user object
  user: User = {
    name: '',
    email: ''
  };

  // Method to handle form submission
  onSubmit() {
    console.log('User Input:', this.user); // Display the user input in the console
    alert(`User Input: \nName: ${this.user.name}\nEmail: ${this.user.email}`); // Display it as an alert (optional)
  }
}
