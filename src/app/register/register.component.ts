
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { __decorate } from "tslib"; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nome: string = ""
  email: string = ""
  senha: string = ""
  confirmarSenha: string = ""
  telefone: string = ""
  faculdade: string = ""
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) { }

  cadastrar() {
    this.authService.register({nome:this.nome,email:this.email,senha:this.senha,confirmarSenha:this.confirmarSenha,telefone:this.telefone,faculdade:this.faculdade}).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
