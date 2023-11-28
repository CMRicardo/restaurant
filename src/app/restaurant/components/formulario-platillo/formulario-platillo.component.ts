import { Component, EventEmitter, Output } from '@angular/core';
import { Dish1 } from '../../interfaces/dish1.constant';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-formulario-platillo',
  templateUrl: './formulario-platillo.component.html',
  styles: [
  ]
})
export class FormularioPlatilloComponent {

  constructor(private _snackBar: MatSnackBar) { }

 dish: Dish1 ={
    name: '',
    imageUrl: null,
    category: 'Elige una categoria',
    price: 0
 }

  imageUrl: string | ArrayBuffer | null = null;
  nameDish: string = '';
  price: number = 0;
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.previewImage(file);
  }

  previewImage(file: File) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.dish.imageUrl = reader.result;
      this.uploadImage()
    };

  }

  uploadImage() {
    // Aquí puedes agregar lógica para subir la imagen al servidor si es necesario
    if(this.dish.imageUrl)
      console.log('hola mundo');

      //console.log(this.dish.imageUrl.toString().split(',')[1]);
    if (this.imageUrl)
      console.log(this.imageUrl.toString().split(',')[1]);
  }
  onSubmit() {
    this.onCancelButton();
    this._snackBar.open('El platillo '+ this.dish.name + ' se guardo exitosamente' ,'' , {
      duration: 4000,

    });  }

  // cuando  se de el boton cancelar
  onCancelButton() : void {
    this.cancelEvent.emit(false);
  }

}
