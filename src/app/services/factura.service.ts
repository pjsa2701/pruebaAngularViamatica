import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor() { }

  private _opciones: Producto[] = [
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

  get opciones() {
    return [...this._opciones];
  }

  seleccionados: Producto[] = []

  totalFactura:number = 0;

  campoValido: boolean = true

  agregarProducto(codigoBuscado: string, cantidadIngresada: number){
    if (codigoBuscado != null && codigoBuscado != '' && cantidadIngresada > 0) {

      //const opcion = this.buscarProductoCodigo(codigoBuscado);

      const opcion = this.opciones.find((opcion) => opcion.codigo === codigoBuscado)

      const total = (cantidadIngresada * opcion!.precio)

      const prueba = this.seleccionados.includes(opcion!);

      const producto: Producto = {
        codigo: opcion!.codigo,
        descripcion: opcion!.descripcion,
        cantidad: cantidadIngresada,
        precio: opcion!.precio,
        total: total
      }

      this.seleccionados.push(producto)

      this.totalFactura += total

    } else {
      this.campoValido = false;
    }
  }

  eliminarProducto(indice: number): void {
    const producto = this.seleccionados.splice(indice, 1)[0];
    this.totalFactura -= producto.total
  }

  /*buscarProductoCodigo(codigo: string): Producto | undefined{
    return this.opciones.find((producto) => producto.codigo === codigo);
  }*/
  
}
