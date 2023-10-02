import { Component, OnInit } from '@angular/core';
import { Product, ProductUpdate } from 'src/app/models/product';
import { MassOfDataService } from 'src/app/services/massOfData/mass-of-data.service';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit  {
  
  allProducts!: Array<Product>;

  showModal: boolean = false;

  constructor(public massOfData: MassOfDataService){
  }



  ngOnInit(){
    this.fetchProducts()
  }

  toggle () {
    this.showModal = !this.showModal;
  }

  fetchProducts(){
    this.massOfData.get('/products').subscribe({
      next: data =>  this.allProducts = data,
      error: (e)=> console.log(e)
    });
  }

  deleteProduct(id: number | undefined){
    this.massOfData.delete('/products/'+id).subscribe({
    next: data => {
      console.log(data.message);
      this.ngOnInit();
    },
    error: (e)=> console.log(e),
  });
  }

  updateProduct(id: number | undefined){
    let product: ProductUpdate = {
      name: "PRODUTO FRONT ATUALIZADO",
  }
    this.massOfData.put('/products/'+id, product).subscribe({
      next: data => {
        console.log(data.message);
        this.ngOnInit();
      },
      error: (e)=> console.log(e),
      complete: () => console.log('ATUALIZADO!')
    });
  }

  showProducts(){
    console.log(this.allProducts)
  }


  catchSubmit(event: boolean){
    if(event == true){
      console.log('SUBMITED! on crud')
      this.toggle();
      this.ngOnInit();
    }
  }
}
