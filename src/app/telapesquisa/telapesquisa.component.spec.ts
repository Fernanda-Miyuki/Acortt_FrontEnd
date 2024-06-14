import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelapesquisaComponent } from './telapesquisa.component';

describe('telapesquisaComponent', () => {
  let component: TelapesquisaComponent;
  let fixture: ComponentFixture<TelapesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelapesquisaComponent]
    });
    fixture = TestBed.createComponent(TelapesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
