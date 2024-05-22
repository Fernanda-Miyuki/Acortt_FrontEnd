import { Component, OnInit, OnDestroy  } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  
  images: string[] = [
    './assets/1.png',
    './assets/2.png',
    './assets/3.png',
    './assets/4.png',
    './assets/5.png',
  ];
  currentIndex: number = 0;
  translateX: number = 0;
  intervalId: any;

  constructor(config: NgbCarouselConfig) {
		config.interval = 3000;
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
