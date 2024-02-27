import { Injectable } from '@angular/core';
import{ HttpClient } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http:HttpClient) { }

  getAllproducts(){
    const url = 'https://fakestoreapi.com/products';
    return this._http.get(url);
  }
}
