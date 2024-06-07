import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { email:'', senha:''};
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {}



  cadastrar() {
    this.router.navigate(['/register']);
    
  }
}
