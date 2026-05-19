import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  colorActual: string = '#CBD5E1';
  nombreColor: string = 'Blanco';

  actualizarcolor(event: { hex: string, nombre: string }) {
    this.colorActual = event.hex;
    this.nombreColor = event.nombre;
  }
}
