import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaCabeceraComponent } from './factura-cabecera/factura-cabecera.component';
import { FacturaDetalleComponent } from './factura-detalle/factura-detalle.component';
import { FacturaProductoComponent } from './factura-producto/factura-producto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FacturaCabeceraComponent,
    FacturaDetalleComponent,
    FacturaProductoComponent
  ],
  exports: [
    FacturaCabeceraComponent,
    FacturaDetalleComponent,
    FacturaProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FacturaModule { }
