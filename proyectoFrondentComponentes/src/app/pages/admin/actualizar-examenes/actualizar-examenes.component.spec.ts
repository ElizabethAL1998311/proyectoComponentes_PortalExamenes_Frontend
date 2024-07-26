import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarExamenesComponent } from './actualizar-examenes.component';

describe('ActualizarExamenesComponent', () => {
  let component: ActualizarExamenesComponent;
  let fixture: ComponentFixture<ActualizarExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarExamenesComponent]
    });
    fixture = TestBed.createComponent(ActualizarExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
