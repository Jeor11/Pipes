import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Peter Parker,';
  nombre2: string = 'JoEl OLguiN rAmIrEz';
  personajes: string[] = ['SpiderMan', 'Hulk', 'IronMan'];
  PI: number = Math.PI;
  Porcentaje: number = 0.234;
  Salario: number = 1234.52323;
  Fecha: Date = new Date() ;
  idioma: string =  'es';
  videoUrl: string = 'https://www.youtube.com/embed/HIlG2NKnsVA';

  valorPromesa = new Promise <string> ( (resolve) => {
  setTimeout( () => {resolve ('llego la data'); } , 3500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 50,
    direccion: {
      calle: 'prima'
    }
  };

}
