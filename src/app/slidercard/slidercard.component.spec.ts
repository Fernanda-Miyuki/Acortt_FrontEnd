import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidercardComponent } from './slidercard.component';

describe('SlidercardComponent', () => {
  let component: SlidercardComponent;
  let fixture: ComponentFixture<SlidercardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidercardComponent]
    });
    fixture = TestBed.createComponent(SlidercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
