import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'add-product',
  templateUrl: 'add-product.component.html'
})

export class AddProductComponent implements OnInit {
  // @Output() formSubmitted = new EventEmitter<{name: string, price: string, description: string}>();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl()
    });
  }

  onSubmit() {
    console.log('Form submitted!');
    console.log(this.form.value);
    this.productService.addProduct(this.form.value);
  }
}
