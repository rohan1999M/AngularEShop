import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductService } from 'src/app/Services/product.service';
import { Products } from '../products';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  categoryArray:any = []

  objProduct = new Products;
  constructor(private adminService:AdminService, private productServices:ProductService) { }
  
  ngOnInit(): void {
  }
 CatForm = new FormGroup({
  category : new FormControl()
 })

 ProductForm = new FormGroup({
  productName: new FormControl(),
  description:new FormControl(),
  category : new FormControl(),
  price:new FormControl(),
 })

 add(){
    let key = this.CatForm.value.category;
    const postBody = {
      categoryName : this.CatForm.value.category
    } 
    
    return this.adminService.AddCategory(postBody).subscribe(res=>{console.log(res)},(er)=>{console.log(er)})
 }

 get(){
  return this.adminService.getCategory().subscribe(res=>{
    // console.log(res); 
    this.categoryArray = res;
  },(er)=>{console.log(er)})
 }

 s(){
  console.log(this.categoryArray.categoryName)
 }


ProductArray :any =[]
 addPorduct(){

    let  category =this.ProductForm.value.category;

    //  const postBody = {
    //   productName : this.ProductForm.value.productName,
    //   description : this.ProductForm.value.description,
    //   category : this.ProductForm.value.category,
    //   price : this.ProductForm.value.price,
    //  } 
       this.objProduct.productName = this.ProductForm.value.productName;
       this.objProduct.description = this.ProductForm.value.description;
       this.objProduct.category = this.ProductForm.value.category;
       this.objProduct.price = this.ProductForm.value.price;


      
      
    //  console.log(category)
     return this.productServices.addProduct(this.objProduct).subscribe(res=>{console.log(res);},(er)=>{console.log(er)})

 }

 getP(){
   
  return this.productServices.getProduct().subscribe(res=>{
    // console.log(res);
    this.ProductArray=res;
    console.log("From Product Array",this.ProductArray)

  },(error)=>{
    console.log(error);
    
  })
  
 }
 


}
