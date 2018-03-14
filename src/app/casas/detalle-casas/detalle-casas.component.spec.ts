import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCasasComponent } from './detalle-casas.component';

describe('DetalleCasasComponent', () => {
  let component: DetalleCasasComponent;
  let fixture: ComponentFixture<DetalleCasasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCasasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
