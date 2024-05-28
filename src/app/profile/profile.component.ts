import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { modalScreenComponent } from '../modalScreen/modalScreen.component.spec';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(
    private router: Router,
    private modalService: NgbModal
  ) { }


  anuncio = [
    {
      urlImage:
        '/assets/anh-nhat-PdALQmfEqvE-unsplash.jpg',
      titulo: 'Placa mãe',
      subtitulo: 'R$ 5000,00',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
        '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Samsung A20',
      subtitulo: 'R$ 1000,00',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
        '/assets/tim-mossholder-VOXs79vySFo-unsplash (1).jpg',
      titulo: 'Iphone 16',
      subtitulo: 'R$ 12000,00',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
        '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Motorola G Pro',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
        '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Redmi 12',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
        '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Samsung Galaxy',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
  ];

  openModal(): void {
    this.modalService.open(modalScreenComponent, { size: 'xl' });
  }
} 