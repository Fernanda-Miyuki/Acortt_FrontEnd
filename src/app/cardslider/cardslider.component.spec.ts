import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsliderComponent } from './cardslider.component';

describe('CardsliderComponent', () => {
  let component: CardsliderComponent;
  let fixture: ComponentFixture<CardsliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsliderComponent]
    });
    fixture = TestBed.createComponent(CardsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
