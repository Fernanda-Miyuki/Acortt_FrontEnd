import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private router: Router) {}


  anuncio = [
    {
      urlImage:
      '/assets/anh-nhat-PdALQmfEqvE-unsplash.jpg',    
      titulo: 'R$ 5000,00',
      subtitulo: 'Placa mãe',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'R$ 1000,00',
      subtitulo: 'Celular A20',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/tim-mossholder-VOXs79vySFo-unsplash (1).jpg',
      titulo: 'R$ 12000,00',
      subtitulo: 'Iphone 16',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'R$ 3000,00',
      subtitulo: 'Samsung Galaxy',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'R$ 3000,00',
      subtitulo: 'Samsung Galaxy',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'R$ 3000,00',
      subtitulo: 'Samsung Galaxy',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
   ];
  } 