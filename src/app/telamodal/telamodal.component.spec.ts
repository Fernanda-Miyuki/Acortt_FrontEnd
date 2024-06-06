import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelamodalComponent } from './telamodal.component';

describe('TelamodalComponent', () => {
  let component: TelamodalComponent;
  let fixture: ComponentFixture<TelamodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelamodalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
