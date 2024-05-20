import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['login']);
  }

  lista = [
    {
      urlImage:
      '/assets/anh-nhat-PdALQmfEqvE-unsplash.jpg',    
      titulo: 'Placa mãe',
      subtitulo: 'R$ 5000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Celular A20',
      subtitulo: 'R$ 1000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/tim-mossholder-VOXs79vySFo-unsplash (1).jpg',
      titulo: 'Iphone 16',
      subtitulo: 'R$ 12000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Samsung Galaxy',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
  ];

  produtos = [
    {
      urlImage:
      'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5vdGVib29rJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
      titulo: 'Samsung Notebook ',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Notebook Dell',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5vdGVib29rJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
      titulo: 'Asure notebook 15',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Vaio FE 15',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
  ];
}
