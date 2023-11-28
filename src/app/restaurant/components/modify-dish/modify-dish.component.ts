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
    imgUrl: null,
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

  previewImage(file: File) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.dish.imgUrl = reader.result;
      this.uploadImage()
    };

  }

  uploadImage() {
    // Aquí puedes agregar lógica para subir la imagen al servidor si es necesario
    if (this.dish.imgUrl)
      console.log('hola mundo');

    //console.log(this.dish.imgUrl.toString().split(',')[1]);
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



  onCancelButton(): void {
    this.cancelEvent.emit(true);

  }
}
