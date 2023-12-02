import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Dish1 } from '../../interfaces/dish1.constant';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MenuItemService } from '../../services/menuItem.service';

@Component({
  selector: 'app-modify-dish',
  templateUrl: './modify-dish.component.html',
  styleUrls: ['./modify-dish.component.css']
})
export class ModifyDishComponent {
  private menuItemService = inject(MenuItemService)

  constructor(private _snackBar: MatSnackBar) { }


  @Input() dish: Dish1 = {
    name: '',
    imageUrl: null,
    category: 'Elige una categoria',
    price: 0
  }
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();

  imageUrl: string | ArrayBuffer | null = null;
  nameDish: string = '';
  price: number = 0;

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
    if (this.imageUrl)
      console.log(this.imageUrl.toString().split(',')[1]);
  }
  async onSubmit() {
    console.log(this.dish);
    try {
      await this.menuItemService.createNewMenuItem(this.dish);
      console.log("Nuevo plato creado exitosamente");
    } catch (error: any) {
      console.error(error.message);
    }
    //cerrar formulario
    this.onCancelButton();
    this._snackBar.open('El platillo ' + this.dish.name + ' se guardo exitosamente', '', {
      duration: 4000,
    });
    this.obtenerTodosLosItemsDeMenu();
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
      }

    });





  }
  public closeConfirmModal() {
    this.showConfirmModal = false
  }
}
