import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
   myindex =-1;
   editproduct : FormGroup

  constructor(
    private _route:Router,
    private _router:ActivatedRoute,
    private _product:ProductsService
  ) {
    this.editproduct = new FormGroup({
      info: new FormControl(''),
      price : new FormControl(''),
      location:new FormControl(''),
      date :new FormControl(''),
      img :new FormControl('')
    });
   }

  ngOnInit(): void {
    this._router.params.subscribe(data =>{
      this.myindex = data['index'];
      this.editproduct.patchValue(this._product.products[this.myindex]);
    });
  }

  update(){
    this._product.products[this.myindex] = this.editproduct.value;
    localStorage.setItem('products', JSON.stringify(this._product.products));
    this._route.navigate(['/mainpage','view',this.myindex]);
    }

}
