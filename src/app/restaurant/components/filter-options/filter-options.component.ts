import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styles: [
  ]
})
export class FilterOptionsComponent {


  actualFilter : string = "Entradas";


  changeFilter(event:MouseEvent): void{

    const filter = (event.target as HTMLInputElement).innerText; // obtiene el texto del elemento mouse
    this.actualFilter = filter;
  }

}
