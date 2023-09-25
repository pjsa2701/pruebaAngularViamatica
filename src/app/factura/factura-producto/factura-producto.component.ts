import { Component, Provider } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';

@Component({
  selector: 'app-factura-producto',
  templateUrl: './factura-producto.component.html'
})

export class FacturaProductoComponent {

  opciones: Producto[] = [
    {
      codigo: '123qwe',
      descripcion: 'Producto #1',
      cantidad: 0,
      precio: 12,
      total: 0
    },
    {
      codigo: '456rty',
      descripcion: 'Producto #2',
      cantidad: 0,
      precio: 34,
      total: 0
    },
    {
      codigo: '789uio',
      descripcion: 'Producto #3',
      cantidad: 0,
      precio: 56,
      total: 0
    },
  ]

  codigoBuscado = '';

  cantidadIngresada = 1;

  items: Producto[] = []

  totalFactura = 0

  campoValido: boolean = true;

  buscarProductoPorCodigo(codigo: string): Producto | undefined {
    return this.opciones.find((producto) => producto.codigo === codigo);
  }

  agregar() {

    if (this.codigoBuscado != null && this.codigoBuscado != '' && this.cantidadIngresada > 0) {

      const producto = this.buscarProductoPorCodigo(this.codigoBuscado);

      const total = (this.cantidadIngresada * producto!.precio)

      const productoX: Producto = {
        codigo: producto!.codigo,
        descripcion: producto!.descripcion,
        cantidad: this.cantidadIngresada,
        precio: producto!.precio,
        total: total
      }

      this.items.push(productoX)

      this.totalFactura += total

      this.campoValido = true

      this.codigoBuscado = '';

      this.cantidadIngresada = 1;

    } else {
      this.campoValido = false;
    }
  }

  eliminar(indice: number): void {
    const productoEliminado = this.items.splice(indice, 1)[0];
    this.totalFactura -= productoEliminado.total
  }

}
