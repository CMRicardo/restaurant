import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styles: [
  ]
})
export class NewEmployeeFormComponent {
  @Output() public onClose: EventEmitter<boolean> = new EventEmitter()

  public closeForm() {
    this.onClose.emit(true)
  }

  public saveEmployee () {

  }
}
