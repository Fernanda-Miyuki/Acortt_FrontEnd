import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements AfterViewInit {
  @ViewChild('activeImage', { static: true }) activeImage!: ElementRef<HTMLImageElement>;
  @ViewChildren('productImages') productImages!: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChild('navItem', { static: true }) navItem!: ElementRef<HTMLAnchorElement>;

  private defaultImageSrc: string;

  constructor() {
    this.defaultImageSrc = '';
  }

  ngAfterViewInit() {
    // Save the default image source
    if (this.activeImage) {
      this.defaultImageSrc = this.activeImage.nativeElement.src;
    }

    // Attach click event listeners to product images
    this.productImages.forEach(imageElementRef => {
      imageElementRef.nativeElement.addEventListener('click', this.changeImage.bind(this));
    });

    // Attach click event listener to navigation item
    if (this.navItem) {
      this.navItem.nativeElement.addEventListener('click', this.toggleNavigation.bind(this));
    }
  }

  changeImage(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (this.activeImage && target) {
      this.activeImage.nativeElement.classList.add('fade-out');
      setTimeout(() => {
        this.activeImage.nativeElement.src = target.src;
        this.activeImage.nativeElement.classList.remove('fade-out');
      }, 300);
    }
  }

  resetImage() {
    if (this.activeImage) {
      this.activeImage.nativeElement.classList.add('fade-out');
      setTimeout(() => {
        this.activeImage.nativeElement.src = this.defaultImageSrc;
        this.activeImage.nativeElement.classList.remove('fade-out');
      }, 300);
    }
  }

  toggleNavigation() {
    if (this.navItem.nativeElement.nextElementSibling) {
      this.navItem.nativeElement.nextElementSibling.classList.toggle('active');
    }
  }
}