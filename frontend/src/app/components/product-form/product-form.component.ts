import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  constructor(private fb: FormBuilder) { }


  productForm = this.fb.group({
    name: [''],
    category_id: [],
    value: [],
    due_date: [''],
    stock: [],
    perishable_product: [],
  });

  @Output() submitedEventOnForm = new EventEmitter<boolean>();

  hasSubmited() {
    this.submitedEventOnForm.emit(true)
    console.log('SUBMITED! on form')
  }


  onSubmit():void {
    console.log(this.productForm.value);
    this.hasSubmited();

  }
}
