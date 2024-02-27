import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  add_product: FormGroup;
  image = ''
  price = 0
  info = ''
  location = ''
  date = new Date();

  constructor(public _product: ProductsService, private _router: Router) {
    this.add_product = new FormGroup({
      info: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('0', [Validators.required, Validators.min(100), Validators.max(10000)]),
      location: new FormControl('pune', [Validators.required, Validators.minLength(5)]),
      date: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  add() {
    const product = this.add_product.value;
    if (this.add_product.valid) {
      this._product.products.push(product);
      localStorage.setItem('products', JSON.stringify(this._product.products));
      this._router.navigate(['/mainpage', 'home']);
    } else {
      alert('please fill all fields');
    }
  }

}
