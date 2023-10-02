import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  @Output() submitedEventOnModal = new EventEmitter<boolean>();

  catchEventOnModal(event: boolean){
    if (event == true){
      this.submitedEventOnModal.emit(true);
      console.log('SUBMITED! on modal')
    }
  }

}
