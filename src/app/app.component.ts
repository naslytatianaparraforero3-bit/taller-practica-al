import { Component } from '@angular/core';
import { CuadroColorComponent } from './cuadro-color/cuadro-color.component';
import { SelectorColoresComponent } from './selector-colores/selector-colores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 colorActual='#dfe5f0' ;
 nombreColor= 'Blancoso';
 actualizarColor(datos: {color: string, nombre: string}){
  this.colorActual= datos.color;
  this.nombreColor= datos.nombre;
 }
}
