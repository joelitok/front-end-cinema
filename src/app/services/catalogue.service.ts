import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/model.products';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
public host:string="http://localhost:8080";
  constructor( private httpClient:HttpClient) { }


  getProduct(page:number,size:number){
   return this.httpClient.get(this.host+"/products?page="+page+"&size="+size);
  }

  getProductByKeyWord(mc:string,page:number,size:number){
    return this.httpClient.get(this.host+"/products/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
   }

   public deleteRessource(url:any){
   return this.httpClient.delete(url);
   }

   public saveRessource(url:any,data:Product){
     return this.httpClient.post(url,data);
   }

   public getRessource(url:any){
    return this.httpClient.get(url);
    }


    public updateRessource(url:any,data:any){
      return this.httpClient.put(url,data);
      }
  //products/search/byDesignationPage?mc=telephone&page=0&size=3
}
