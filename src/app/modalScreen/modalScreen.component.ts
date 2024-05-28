import { ComponentFixture, TestBed } from '@angular/core/testing';

import { modalScreenComponent } from './modalScreen.component.spec';

describe('modalScreenComponent', () => {
  let component: modalScreenComponent;
  let fixture: ComponentFixture<modalScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [modalScreenComponent]
    });
    fixture = TestBed.createComponent(modalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
