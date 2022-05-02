import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { Planta } from './planta';
import { PlantasComponent } from './plantas.component';
import { PlantaService } from './planta.service';

describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantasComponent ],
      providers: [PlantaService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.plantas = [
      new Planta(
        1,
        'nombre_comun 1',
        'nombre_cientifico 1',
        'tipo 1', 
        120,
        'clima 1',
        'sustrato_siembra 1'
      ),
      new Planta(
        2,
        'nombre_comun 2',
        'nombre_cientifico 2',
        'tipo 2', 
        120,
        'clima 2',
        'sustrato_siembra 2'
      ),
      new Planta(
        3,
        'nombre_comun 3',
        'nombre_cientifico 3',
        'tipo 3', 
        120,
        'clima 3',
        'sustrato_siembra 3'
      ),
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
