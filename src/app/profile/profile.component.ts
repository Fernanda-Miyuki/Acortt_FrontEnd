import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TelamodalComponent } from '../telamodal/telamodal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(
    private router: Router,
    private modalService: NgbModal
    ) {}


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
      subtitulo: 'Samsung A20',
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
      subtitulo: 'Motorola G Pro',
      local: 'Fatec Shunji Nishimura de Pompeia',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage:
      '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'R$ 3000,00',
      subtitulo: 'Redmi 12',
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

   openModal():void{
    this.modalService.open(TelamodalComponent, {size:'xl'});
   }
  } 