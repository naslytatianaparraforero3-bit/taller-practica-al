import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selector-colores',
  standalone: false,
  templateUrl: './selector-colores.component.html',
  styleUrl: './selector-colores.component.scss'
})
export class SelectorColoresComponent {
  @Output() colorCambiado = new EventEmitter<{ hex: string, nombre: string }>();

  seleccionarColor(hex: string, nombre: string) {
    this.colorCambiado.emit({ hex, nombre });
  }
}
