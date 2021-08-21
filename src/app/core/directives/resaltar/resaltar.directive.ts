import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit{

  @Input('resaltar') plan: string = "";
  // COMO VAMOS A MANIPULAR EL DOM 
  // ElementRef: Es un modulo que nos permite crear una referencia de un elemento del DOM para manipularlo desde aca desde el TypeScript
  // Este modulo  tambien nos permite manipular los elementos del DOM pero ENFOCADO A LOS ATRIBUTOS DEL CSS

  // ANGULAR NO SIEMPRE CORRE EN EL CLIENTE TAMBIEN PUEDE CORRER EN EL SERVIDOR
  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2
    ) { }

    // ahora cuando es llamada esta directiva va a aplicar unos estilos a los elementos que aplique

    // setStyle recibe tres parametros ('el elemento nativo', 'el atributo css que queremos modificar', 'el valor que queremos que ese atributo tome')
  ngOnInit(){
      if(this.plan==='pagado'){
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yelow');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
      }
  }
  

}

