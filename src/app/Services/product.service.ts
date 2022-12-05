import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../Components/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(body:Products){
   
    return this.http.post('http://localhost:3000/Products/',body);
  }
  
  getProduct(){
    return this.http.get('http://localhost:3000/Products');
  }

}
