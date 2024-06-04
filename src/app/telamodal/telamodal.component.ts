import { ComponentFixture, TestBed } from '@angular/core/testing';

import { telamodalComponent } from './telamodal.component.spec';

describe('telamodalComponent', () => {
  let component: telamodalComponent;
  let fixture: ComponentFixture<telamodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [telamodalComponent]
    });
    fixture = TestBed.createComponent(telamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
