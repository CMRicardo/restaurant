import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Dish1 } from '../../interfaces/dish1.constant';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuItemService } from '../../services/menuItem.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-modify-dish',
  templateUrl: './modify-dish.component.html',
  styleUrls: ['./modify-dish.component.css']
})
export class ModifyDishComponent {
  private menuItemService = inject(MenuItemService)
  private ordersService = inject(OrdersService)

  constructor(private _snackBar: MatSnackBar) { }


  @Input() dish: Dish1 = {
    name: '',
    imageUrl: null,
    category: 'Elige una categoria',
    price: 0
  }


  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();



  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.previewImage(file);
  }
  // opciones del modal
  public showConfirmModal = false
  public userConfirmation = false


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
    if (this.dish.imageUrl)
      console.log('hola mundo');

    //console.log(this.dish.imageUrl.toString().split(',')[1]);
    if (this.dish.imageUrl)
      console.log(this.dish.imageUrl.toString().split(',')[1]);
  }
  async onSubmit() {
    console.log(this.dish);
    try {
      await this.menuItemService.updateMenuItem(this.dish);
      this._snackBar.open('El platillo ' + this.dish.name + ' se modifico exitosamente', '', {
        duration: 4000,
      });
    } catch (error: any) {
      console.error(error.message);
    }
    //cerrar formulario
    this.onCancelButton();

  }

  async obtenerTodosLosItemsDeMenu(): Promise<void> {
    try {
      const menuItems = await this.menuItemService.getAllMenuItems();
      console.log(menuItems);
      // Hacer algo con los elementos de menú obtenidos
    } catch (error) {
      console.error(`Error al obtener elementos de menú:}`);
    }
  }

  openConfirmModal(): Promise<boolean> {
    return new Promise((resolve) => {
      // Lógica para mostrar el modal y configurar el valor de this.userConfirmation
      this.showConfirmModal = true
      // Una vez que el usuario ha respondido, llamamos a resolve con el valor de confirmación
      resolve(this.userConfirmation);
    });
  }

  onDeleteButton(): void {
    //iniciamos el moda
    this.openConfirmModal()
    //la magia continua en getUserChoice


  }


  onCancelButton(): void {
    this.cancelEvent.emit(true);
  }


  public getUserChoice(choice: Promise<boolean>): void {
    // this.userConfirmation = await choice
    // console.log(this.userConfirmation);

    //cuando se resuelva la promesa de obtener la seleccion del usuario
    choice.then((userConfirmation) => {
      //asignar el valor dado por el usuario
      this.userConfirmation = userConfirmation;
      //verificamos el resultado
      if (this.userConfirmation) {
        //reiniciamos el valor por defecto
        this.userConfirmation = false
        //eliminamos el item
        this.menuItemService.deleteMenuItem(this.dish.id!)
        //mensaje de confirmacion
        this._snackBar.open('El platillo ' + this.dish.name + ' se elimino exitosamente', '', {
          duration: 4000,
        });
        //acutualizamos el componente de menulist
        this.ordersService.whenDeleteDish(this.dish)

        //cerramos el formulario
        this.onCancelButton()

      }

    });

  }
  public closeConfirmModal() {
    this.showConfirmModal = false
  }

  public onModifyDish():void{
    this.menuItemService.updateMenuItem(this.dish)
    // this._snackBar.open('El platillo ' + this.dish.name + ' se modifico exitosamente', '', {
    //   duration: 4000,
    // });
  }
}
