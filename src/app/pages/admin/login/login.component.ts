import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService, 
    private router: Router,
    private spinner: NgxSpinnerService
    ) {}
  ngOnInit(): void {
   
  }
  loginObj:any={
    username:'',
    password:''
  }
  errorMessage:string = "";
 Login(){
  this.spinner.show();
  
  const { username, password } = this.loginObj;
  
  // Simulate asynchronous login process
  setTimeout(() => {
    if (this.authService.login(username, password)) {
      // Redirect based on user role
      if (username === 'frontdesk') {
        this.router.navigate(['/shop']);
      } else if(username === 'admin') {
        this.router.navigate(['/dashboard']);
      }
    } else {
      // Display error message for invalid credentials
      this.errorMessage = "Invalid username or password";
    }

    // Hide spinner
    this.spinner.hide();
  }, 2000); 
}

}
