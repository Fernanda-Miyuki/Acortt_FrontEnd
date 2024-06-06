import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __decorate } from "tslib";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements AfterViewInit, OnInit {
  ngOnInit() {
    this.toSignUp()
  }

  @ViewChild('Cadastrar') cadastro?: ElementRef<HTMLDivElement>;
  @ViewChild('Logar') login?: ElementRef<HTMLDivElement>;
  @ViewChild('btnColor') btnColor?: ElementRef<HTMLDivElement>;

  formRegisterpt2 = new FormGroup({
    phone: new FormControl('', Validators.required),
    campo: new FormControl('', Validators.required),
  })
  formRegister = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })


  ngAfterViewInit(): void {
    this.restaurarPosicoes();
    this.toSignUp();
  }
  restaurarPosicoes() {
    if (!this.cadastro || !this.login || !this.btnColor) {
      console.error('Um ou mais elementos não foram encontrados.');
      return;
    }
    this.setPos(localStorage.getItem('posicaoCadastro') || "0px", localStorage.getItem('posicaoLogin') || "450px", localStorage.getItem('posicaoBtnColor') || "0px");
  }

  toSignUp() {
    this.setPos("25px", "450px", "0px");
  }
  toSignIn() {
    this.setPos("-450px", "25px", "125px");
  }

  onRegisterPt1() {
    if (this.formRegister.valid) {
      this.toSignIn();
    }
  }

  setPos(cad: string, log: string, btn: string) {
    this.cadastro!.nativeElement.style.left = cad;
    this.login!.nativeElement.style.left = log;
    this.btnColor!.nativeElement.style.left = btn;
  }

}

