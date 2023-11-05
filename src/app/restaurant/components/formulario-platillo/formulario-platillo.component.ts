import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-platillo',
  templateUrl: './formulario-platillo.component.html',
  styles: [
  ]
})
export class FormularioPlatilloComponent {

onSubmit(event:Event) {
event.preventDefault()
throw new Error('Method not implemented.');
}

}
