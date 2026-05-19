import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  colorActual: string = '#d8cbe1';
  nombreColor: string = 'Blancoso';

  actualizarcolor(event: { hex: string, nombre: string }) {
    this.colorActual = event.hex;
    this.nombreColor = event.nombre;
  }
}
