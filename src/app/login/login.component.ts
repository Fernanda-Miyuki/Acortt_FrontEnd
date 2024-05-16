import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ""
  senha: string = ""
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) { }



  cadastrar() {
    this.router.navigate(['/register']);
  }

  login() {
    this.authService.login({email:this.email,senha:this.senha}).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
