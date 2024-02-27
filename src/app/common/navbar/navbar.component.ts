import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _product:ProductsService) { }

  ngOnInit(): void {

    const products = localStorage.getItem('products');
    if(products){
      this._product.products = JSON.parse(products);
    }
  }


}
