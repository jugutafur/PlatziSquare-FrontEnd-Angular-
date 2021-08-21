import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-and-directives',
  templateUrl: './basics-and-directives.component.html',
  styleUrls: ['./basics-and-directives.component.scss']
})
export class BasicsAndDirectivesComponent {


  title = 'angularDos-PlatziSquare';
  twoWayDataBinding= "";
  public habilitar: boolean;

  // array de objetos con any acepta cualqueir  tipo de objetos 
  lugares:any = [
    {
      plan: 'pagado', 
      cercania: 1,
      distancia: 2,
      active: true,
      nombre: 'Floreria la gardenia'
    },
    {
      plan: 'pagado', 
      cercania: 1,
      distancia: 2.5,
      active: true,
      nombre: 'Donas la pasadita'
    },
    {
      plan: 'gratuito', 
      cercania: 2,
      distancia: 5,
      active: false,
      nombre: 'Veterianaria huellitas felices'
    },
    {
      plan: 'pagado', 
      cercania: 2,
      distancia: 7,
      active: true,
      nombre: 'Sushi Suhiroll'
    },
    {
      plan: 'gratuito', 
      cercania: 3,
      distancia: 15,
      active: true,
      nombre: 'Hotel la gracia'
    },
    {
      plan: 'pagado', 
      cercania: 3,
      distancia: 14,
      active: false,
      nombre: 'Zapateria el clavo'
    }
  ]

  constructor(){
    this.habilitar=false;

    // metodo para que espere un Xtiempo en ms con una funcion anonima
    setTimeout(() => {
      this.habilitar=true;
    }, 3000);
  }

  hacerAlgo(){
    alert("event binding");
  }

}
