import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @Input() liked:boolean = false;
  @Input() index = -1;
  @Input() image = "";
  @Input() price = 0;
  @Input() title = "";
  @Input() description = " ";
  @Input() date = "";
  @Input() rating="";


  constructor( public _product:ProductsService) { }

  myindex =-1;
  ngOnInit(): void {
  }
togglelike(i:number){
  this._product.togglelike(i);
  this._product.storeindb();
}
  
}
