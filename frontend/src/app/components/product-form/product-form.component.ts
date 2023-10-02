import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product, ProductUpdate } from 'src/app/models/product';
import { MassOfDataService } from 'src/app/services/massOfData/mass-of-data.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit{

  categories!: Array<Category>
  
  constructor(
    public massOfData: MassOfDataService) { 
      
    }

    @Input() editValues!: ProductUpdate | null;
    
    @Output() submitedEventOnForm = new EventEmitter<boolean>();
    

  ngOnInit(): void {
    if(this.editValues){
      this.productForm.patchValue({
        name: this.editValues.name,
        category_id: this.editValues.category_id,
        value: this.editValues.value, 
        due_date: this.editValues.due_date,
        stock: this.editValues.stock, 
        perishable_product: this.editValues.perishable_product == true ? 'sim' : 'nao', 
      });
    }
    this.getCategory();
  }
  
  getCategory(){
    this.massOfData.get('/categories').subscribe({
      next: data => {
        this.categories = data
      },
      error: (e)=> console.log(e),
    });

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

  


  hasSubmited() {
    this.submitedEventOnForm.emit(true)
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

      if(this.editValues){
        this.massOfData.put('/products/'+this.editValues.id, product).subscribe({
          next: data => {
            this.hasSubmited();
          },
          error: (e)=> console.log(e),
          complete: () => console.log('ATUALIZADO!')
        });

      }else{
        this.massOfData.post('/products', product).subscribe({
          next: data => {
            this.hasSubmited();
          },
          error: (e)=> console.log(e),
          complete: () => console.log('CERTO!')
        });
      }
    } 
  }
}
