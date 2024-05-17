
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
  usu_nome: string = ""
  usu_email: string = ""
  usu_senha: string = ""
  //usu_confirmarSenha: string = ""
  usu_tel: string = ""
  facul_id: string = ""
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) { }

  cadastrar() {
    this.authService.register({usu_nome:this.usu_nome,usu_email:this.usu_email,usu_senha:this.usu_senha,usu_tel:this.usu_tel,facul_id:this.facul_id}).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
