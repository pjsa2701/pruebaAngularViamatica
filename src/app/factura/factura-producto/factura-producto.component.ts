import { Component, Provider } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { FacturaService } from '../../services/factura.service';

@Component({
  selector: 'app-factura-producto',
  templateUrl: './factura-producto.component.html'
})

export class FacturaProductoComponent {

  constructor( private facturaService: FacturaService ) { }

  codigoBuscado = '';

  cantidadIngresada = 1;

  get opciones() {
    return this.facturaService.opciones;
  }

  get seleccionados(){
    return this.facturaService.seleccionados
  }

  get totalFactura(){
    return this.facturaService.totalFactura
  }

  get campoValido(){
    return this.facturaService.campoValido
  }

  agregar(){
    this.facturaService.agregarProducto(this.codigoBuscado, this.cantidadIngresada);
  }

  eliminarProducto(indice: number): void {
    this.facturaService.eliminarProducto(indice);
  }

  //seleccionados: Producto[] = []

  //totalFactura = 0

  //campoValido: boolean = true;

  /*agregar2() {

    if (this.codigoBuscado != null && this.codigoBuscado != '' && this.cantidadIngresada > 0) {

      const producto = this.buscarProductoCodigo(this.codigoBuscado);

     // const producto = this.opciones.find((producto) => producto.codigo === this.codigoBuscado)

      const total = (this.cantidadIngresada * producto!.precio)

      const productoX: Producto = {
        codigo: producto!.codigo,
        descripcion: producto!.descripcion,
        cantidad: this.cantidadIngresada,
        precio: producto!.precio,
        total: total
      }

      this.seleccionados.push(productoX)

      this.totalFactura += total

      this.campoValido = true

      this.codigoBuscado = '';

      this.cantidadIngresada = 1;

    } else {
      this.campoValido = false;
    }
  }*/

  
  /*buscarProductoCodigo(codigo: string): Producto | undefined{
    return this.opciones.find((producto) => producto.codigo === codigo);
  }*/

}
