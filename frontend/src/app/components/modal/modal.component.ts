import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductUpdate } from 'src/app/models/product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {
      console.log('modal aquui: ', this.editValues)
  }

  @Input() editValues!: ProductUpdate | null;
  @Output() submitedEventOnModal = new EventEmitter<boolean>();

  catchEventOnModal(event: boolean){
    if (event == true){
      this.submitedEventOnModal.emit(true);
      console.log('SUBMITED! on modal')
    }
  }

}
