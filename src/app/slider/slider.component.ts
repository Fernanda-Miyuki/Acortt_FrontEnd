import { Component, OnInit, OnDestroy  } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  
  images: string[] = [
    './assets/piz1.png',
    './assets/piz2.png',
    './assets/piz3.png'
  ];
  currentIndex: number = 0;
  translateX: number = 0;
  intervalId: any;

  constructor(config: NgbCarouselConfig) {
		config.interval = 5000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = false;
	}

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 4000); // Muda a imagem a cada 3 segundos
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.translateX = -this.currentIndex * 100;
  }
}
