import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['login']);
  }

  lista = [
    {titulo: '5000,00', subtitulo: 'Placa mãe', local: 'Fatec', data: '10/05/2024 - 10:00'},
    {titulo: '1000,00', subtitulo: 'Celular A20', local: 'Fatec', data: '10/05/2024 - 10:00'},
    {titulo: '12000,00', subtitulo: 'Iphone 16', local: 'Fatec', data: '10/05/2024 - 10:00'},
    {titulo: '3000,00', subtitulo: 'Notebook Dell', local: 'Fatec', data: '10/05/2024 - 10:00'},
  ]

}
