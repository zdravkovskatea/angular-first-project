import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from "@angular/router";
import {forkJoin} from "rxjs";

@Component({
  selector: 'add-product',
  templateUrl: 'add-product.component.html'
})

export class AddProductComponent implements OnInit {
  // @Output() formSubmitted = new EventEmitter<{name: string, price: string, description: string}>();
  form: FormGroup = this.formDefinition();
  product;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(
    //   paramMap => {
    //     const productId = +paramMap.get('id');
    //     this.product = this.productService.getProduct(productId);
    //     console.log(this.product);
    //     if (productId) {
    //       this.form.patchValue(this.product);
    //     }
    //   });
    const productId = +this.activatedRoute.snapshot.paramMap.get('id')
    this.product = this.productService.getProduct(productId);
    console.log(this.product);
    if (productId) {
      this.form.patchValue(this.product);
    }
  }

  formDefinition() {
    return new FormGroup({
      id: new FormControl(),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl()
    });
  }

  onSubmit() {
    console.log('Form submitted!');
    console.log(this.form.value);
    if (this.product) {
      this.productService.updateProduct(this.form.value);
    } else {
      this.productService.addProduct(this.form.value);
    }
    this.router.navigateByUrl('products');
  }
}
