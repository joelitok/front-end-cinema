import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public products:any;
public size:number=5;
public currentPage:number=0;
public totalPages:number=0;
public pages:Array<number>=[];
public currentKeyWord:string="";

constructor( private httpClient:HttpClient,
    public servicesCatalogue:CatalogueService,
    public router:Router) { }

  ngOnInit(): void {
  // this.onGetProducts();
  this.chercherProduits();
  }

   onGetProducts(){
    this.servicesCatalogue.getProduct(this.currentPage,this.size).subscribe(
      data=>{
        this.products=data;
        this.totalPages=this.products.page.totalPages;
        this.pages=Array<number>(this.totalPages);
      }, err=>{
        console.log("error"+err);
      }
    );
  }

  onPageProduct(i:number){
  this.currentPage=i;
  //  this.onGetProducts();
  this.chercherProduits();
  }

onChercher(f:any){
  this.currentPage=0;
  this.currentKeyWord = f.keyword;
  this.chercherProduits();
}


  chercherProduits(){
   this.servicesCatalogue.getProductByKeyWord(
     this.currentKeyWord,
      this.currentPage,this.size).subscribe(

      data=>{
        this.products=data;
        this.totalPages=this.products.page.totalPages;
        this.pages=Array<number>(this.totalPages);
      }, err=>{
        console.log("error"+err);
      }
    );
  }


  onDeleteProduct(p:any){
  let conf=confirm("Etes vous sur ? ");
    if(conf){
      this.servicesCatalogue.deleteRessource(p._links.self.href).subscribe(
        data=>{
          console.log("data relaod");
          this.chercherProduits();
        },err=>{
          console.log("err"+err)
        }
      )
    }
  }


onEditProduct(p:any){
  
let url = p._links.self.href;
this.router.navigateByUrl('/edit-product/'+btoa(url));

  //this.router.navigateByUrl('/edit-product/'+p.id);

  }


}
