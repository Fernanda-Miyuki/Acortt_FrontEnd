import { ComponentFixture, TestBed } from '@angular/core/testing';

import { telapesquisaComponent } from './telapesquisa.component';

describe('telapesquisaComponent', () => {
  let component: telapesquisaComponent;
  let fixture: ComponentFixture<telapesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [telapesquisaComponent]
    });
    fixture = TestBed.createComponent(telapesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
