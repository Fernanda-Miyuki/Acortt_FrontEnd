import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-cardslider',
  templateUrl: './cardslider.component.html',
  styleUrls: ['./cardslider.component.scss']
})
export class CardsliderComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: SlickCarouselComponent; 

  lista: any[] = [
     {
      urlImage: '/assets/anh-nhat-PdALQmfEqvE-unsplash.jpg',
      titulo: 'Placa mãe',
      subtitulo: 'R$ 5000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Celular A20',
      subtitulo: 'R$ 1000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: '/assets/anh-nhat-PdALQmfEqvE-unsplash.jpg',
      titulo: 'Placa mãe',
      subtitulo: 'R$ 5000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Celular A20',
      subtitulo: 'R$ 1000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: '/assets/anh-nhat-PdALQmfEqvE-unsplash.jpg',
      titulo: 'Placa mãe',
      subtitulo: 'R$ 5000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: '/assets/simerpreet-singh-OOVomt_6wEY-unsplash.jpg',
      titulo: 'Celular A20',
      subtitulo: 'R$ 1000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
  ];

  produtos: any[] = [
    {
      urlImage: 'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5vdGVib29rJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
      titulo: 'Samsung Notebook ',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Notebook Dell',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: 'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5vdGVib29rJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
      titulo: 'Samsung Notebook ',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Notebook Dell',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: 'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5vdGVib29rJTIwYXBwbGV8ZW58MHx8MHx8fDA%3D',
      titulo: 'Samsung Notebook ',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
    {
      urlImage: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Notebook Dell',
      subtitulo: 'R$ 3000,00',
      local: 'Fatec',
      data: '10/05/2024 - 10:00',
    },
  ];

  slickCarouselConfig = {
    slidesToShow: 5, // Ajuste o número de slides para acomodar os itens duplicados
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  constructor() { }

  ngAfterViewInit() {
    console.log(this.carousel);
  }

  next() {
    this.carousel.slickNext();
  }

  prev() {
    this.carousel.slickPrev();
  }
}
