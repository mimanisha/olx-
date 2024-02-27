import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  myindex=-1;

  constructor(private _route:ActivatedRoute,
    private _router:Router,
    public _product:ProductsService) { }

  ngOnInit(): void {
    this._route.params.subscribe(data => {
      this.myindex = data['index'];
    })
  }

  delete(){
    if(confirm("Are you sure to delete product ??")){
      this._product.products.splice(this.myindex,1);
      localStorage.setItem('products',JSON.stringify(this._product.products))
      this._router.navigate(['/mainpage','home']);
    }
  }

}
