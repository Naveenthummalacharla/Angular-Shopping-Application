import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedin: boolean = false;
  private userRole: string = '';

  constructor() {}

  // Method to check if user is logged in
  isLoggedIn(): boolean {
    return this.isLoggedin;
  }

  // Method to get user role
  getUserRole(): string {
    return this.userRole;
  }

  // Method to simulate login functionality
  login(username: string, password: string): boolean {
    // Assuming the username and password validation logic here
    if (username === 'admin' && password === 'admin') {
      this.isLoggedin = true;
      this.userRole = 'admin';
      sessionStorage.setItem(
        'auth',
        JSON.stringify({ isLoggedIn: true, userRole: 'admin' })
      );
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isLoggedin = true;
      this.userRole = 'user';
      sessionStorage.setItem(
        'auth',
        JSON.stringify({ isLoggedIn: true, userRole: 'user' })
      );
      return true;
    } else {
      return false;
    }
  }
  logout(): void {
    this.isLoggedin = false;
    this.userRole = '';
    sessionStorage.removeItem('auth');
  }
}
