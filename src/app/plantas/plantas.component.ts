import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  plantas: Planta[] = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private plantaService: PlantaService) { }

  ngOnInit(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.totalInterior = plantas.reduce((counter, { tipo }) => tipo === 'Interior' ? counter += 1 : counter, 0);
      this.totalExterior = plantas.reduce((counter, { tipo }) => tipo === 'Exterior' ? counter += 1 : counter, 0);
    });
  }

}
