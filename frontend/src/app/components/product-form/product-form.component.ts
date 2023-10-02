import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { MassOfDataService } from 'src/app/services/massOfData/mass-of-data.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent{

  constructor(
    public massOfData: MassOfDataService) { 
      
    }

  productForm = new FormGroup({
    name: new FormControl<string>("",[
      Validators.required,
      Validators.maxLength(64),
      Validators.pattern("\\s*\\S.*")
    ]),
    category_id: new FormControl<number | null>(null, [
      Validators.required
    ] ),
    value: new FormControl<number | null>(null, [
      Validators.required,
      Validators.max(10000000000)
    ] ),
    due_date: new FormControl<Date | null>(null, [
      Validators.required
    ] ),
    stock: new FormControl<number | null>(null, [
      Validators.required,
      Validators.max(10000000000),
      Validators.pattern("^[0-9]*$")
    ] ),
    perishable_product: new FormControl<string | null>(null, [
      Validators.required
    ] )
  });

  @Output() submitedEventOnForm = new EventEmitter<boolean>();
  


  hasSubmited() {
    this.submitedEventOnForm.emit(true)
    console.log('SUBMITED! on form')
  }


  onSubmit():void {

    if(!this.productForm.valid) {
      this.productForm.markAllAsTouched();
    }else{
      let product: Product = {
        name: this.productForm.value.name? this.productForm.value.name : '',
        category_id: this.productForm.value.category_id ? this.productForm.value.category_id : 0,
        value: this.productForm.value.value? this.productForm.value.value : 0,
        due_date: new Date(this.productForm.value.due_date? this.productForm.value.due_date : '' ),
        stock: this.productForm.value.stock ? this.productForm.value.stock : 0,
        perishable_product: this.productForm.value.perishable_product == 'sim'? true : false
      }
      console.log(product);
      
      this.massOfData.post('/products', product).subscribe({
        next: data => {
          console.log(data.message);
          this.hasSubmited();
        },
        error: (e)=> console.log(e),
        complete: () => console.log('CERTO!')
      });
    } 
  }
}
