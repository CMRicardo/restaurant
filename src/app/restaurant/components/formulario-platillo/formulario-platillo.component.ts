import { Component, EventEmitter, Output,inject } from '@angular/core';
import { Dish1 } from '../../interfaces/dish1.constant';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuItemService } from '../../services/menuItem.service';
import { OrdersService } from '../../services/orders.service';



@Component({
  selector: 'app-formulario-platillo',
  templateUrl: './formulario-platillo.component.html',
  styles: [
  ]
})
export class FormularioPlatilloComponent {

  constructor(private _snackBar: MatSnackBar) { }
  private menuItemService = inject(MenuItemService)
  private ordersService = inject(OrdersService)


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
  async onSubmit() {
    this.dish.description= '';
    this.dish.imageUrl='https://th.bing.com/th/id/R.efa9cd576fe3870126a98f1ec771c3dd?rik=Q8QKkZUqqie3qA&pid=ImgRaw&r=0'
    console.log(this.dish);
    try {
      await this.menuItemService.createNewMenuItem(this.dish);
      console.log("Nuevo plato creado exitosamente");
      this._snackBar.open("Nuevo plato creado exitosamente", '', {
        duration: 4000,
      });
      this.ordersService.whenAddNewDish(this.dish)
    } catch (error: any) {

      this._snackBar.open(error.message, '', {
        duration: 4000,
      });
      console.error(error.message);
    }
    this.onCancelButton();

  }

  // cuando  se de el boton cancelar
  onCancelButton() : void {
    this.cancelEvent.emit(false);
  }

}
