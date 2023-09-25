import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura-detalle',
  templateUrl: './factura-detalle.component.html'
})
export class FacturaDetalleComponent implements OnInit {

  fechaActual: Date = new Date();
  fechaVence: Date = new Date();

  ngOnInit(): void {
    this.addDays(this.fechaActual, this.fechaVence)
  }

  addDays(dateActual: Date, dateVence: Date) {
    dateVence.setDate(dateActual.getDate() + 90)
  }

}
