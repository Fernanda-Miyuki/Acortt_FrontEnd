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
  ) { }


  anuncio = [
    {
        urlImage: '/assets/anh-nhat-PdALQmfEqvE-unsplash.jpg',
        titulo: 'Smartphone Samsung Galaxy',
        subtitulo: 'R$ 5000,00',
        local: 'Fatec',
        data: '10/05/2024 - 10:00',
      },
    {
        urlImage: '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
        titulo: 'Smartphone Samsung Galaxy',
        subtitulo: 'R$ 1000,00',
        local: 'Fatec',
        data: '10/05/2024 - 10:00',
      },
    {
        urlImage: '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
        titulo: 'Smartphone Samsung Galaxy',
        subtitulo: 'R$ 1000,00',
        local: 'Fatec',
        data: '10/05/2024 - 10:00',
      },
    {
        urlImage: '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
        titulo: 'Smartphone Samsung Galaxy',
        subtitulo: 'R$ 1000,00',
        local: 'Fatec',
        data: '10/05/2024 - 10:00',
      },
    {
        urlImage: '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
        titulo: 'Smartphone Samsung Galaxy',
        subtitulo: 'R$ 1000,00',
        local: 'Fatec',
        data: '10/05/2024 - 10:00',
      },
    {
        urlImage: '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
        titulo: 'Smartphone Samsung Galaxy',
        subtitulo: 'R$ 1000,00',
        local: 'Fatec',
        data: '10/05/2024 - 10:00',
      }

   ];

  openModal(): void {
    this.modalService.open(TelamodalComponent, { size: 'xl' });
  }
} 