import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _product:ProductsService,private _rest:RestService) { }

  ngOnInit(): void {
    
    this._rest.getAllproducts().subscribe((data) => {
      console.log(data);
      this._product.products = data as any;
    }, (err) =>{
        console.log(err);
    })
  }

}
