import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit{
  productList;
  constructor(
    private productService: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {
    console.log('test');
    this.productList = this.productService.products;
  }

  // productList = [
  //   {name: 'Product 1', price : '750', description: 'Description 1'},
  //   {name: 'Product 2', price: '500', description: 'Desc 2'},
  //   {name: 'Product 3', price: '450'},
  //   {name: 'Product 4', price: '800'},
  //   ];
  share() {
    console.log('Shared');
  }
  onNotify() {
    console.log('Notified');
  }
  onBack() {
    this.router.navigateByUrl('');
  }
  onNewProduct(productData: {name: string, price: string, description: string}) {
    this.productList.push({
      name: productData.name,
      price: productData.price,
      description: productData.description});
  }
}
