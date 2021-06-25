import { Component  } from '@angular/core';

@Component({
    selector: 'primerComponente',
    template: `
        <h1>Hola Mundo este es mi primer Componente</h1><br/>
        <p>Este es mi primer componente</p>
        `         
})
export class primerComponente{
    constructor(){
        console.log('Componente primerComponente cargado ');
    }
}