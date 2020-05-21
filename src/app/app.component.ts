import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Peter Parker,';
  personajes = ['SpiderMan', 'Hulk', 'IronMan'];
  PI: number = Math.PI;
  Porcentaje = 0.234;
  Salario = 1234.52323;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 50,
    direccion: {
      calle: 'prima'
    }
  };

}
