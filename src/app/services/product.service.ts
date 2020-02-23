import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class ProductService {
  constructor(private router: Router) {
  }

  products = [
    {id: 1, name: 'Product 1', price: '750', description: 'Description 1'},
    {id: 2, name: 'Product 2', price: '500', description: 'Desc 2'},
    {id: 3, name: 'Product 3', price: '450'},
    {id: 4, name: 'Product 4', price: '800'},
  ];

  addProduct(product) {
    const newId = this.products.length + 1;
    this.products.push({...product, id: newId});
  }

  getProduct(id) {
    return this.products.filter(p => p.id === id)[0];
  }

  updateProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        index = i;
      }
    }
    console.log(index);

    this.products[index] = product;
  }
}
