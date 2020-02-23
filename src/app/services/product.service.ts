import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
  products = [
    {name: 'Product 1', price : '750', description: 'Description 1'},
    {name: 'Product 2', price: '500', description: 'Desc 2'},
    {name: 'Product 3', price: '450'},
    {name: 'Product 4', price: '800'},
  ];

  addProduct(product) {
    this.products.push(product);
  }
}
