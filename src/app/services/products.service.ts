import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any[] = [{
    image:" https://apollo-singapore.akamaized.net/v1/files/0150adyrnom12-IN/image;s=300x600;q=60",
    price :1000,
    info:"cmera",
    location:"pune",
    date :'10-09-2020',
    liked:false
  },
  {
    image:"https://apollo-singapore.akamaized.net/v1/files/yr2mr0dfv17m1-IN/image;s=300x600;q=60",
    price:112000,
    info:"car",
    location:"beed",
    date:'12-09-2019',
    liked:true
  }
  ];
  constructor() { }
  togglelike(i:number){
    this.products[i].liked = !this.products[i].liked;
  }
  
  storeindb(){
    localStorage.setItem('products',JSON.stringify(this.products))
  }
}
