import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {AlertComponent} from './alert-component/alert.component';
import {RouterModule} from '@angular/router';
import {TestComponentComponent} from './test-component/test-component.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AddProductComponent} from './product/add-product.component';
import {ProductService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AlertComponent,
    TestComponentComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'test', component: TestComponentComponent},
      {path: 'products', component: ProductListComponent},
      {path: 'products/add', component: AddProductComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
