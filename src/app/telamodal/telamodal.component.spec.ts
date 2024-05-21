import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelamodalComponent } from './telamodal.component';

describe('TelamodalComponent', () => {
  let component: TelamodalComponent;
  let fixture: ComponentFixture<TelamodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelamodalComponent]
    });
    fixture = TestBed.createComponent(TelamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
