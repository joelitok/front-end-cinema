import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/model.products';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public currentProduct:any={};
  public url:string="";

  constructor( 
    private router: Router,
    private activetedRoute:ActivatedRoute,
    private catService:CatalogueService) {}

ngOnInit(): void {
this.url=atob(this.activetedRoute.snapshot.params.id)
this.catService.getRessource(this.url).subscribe(
data=>{
this.currentProduct=data;
console.log(this.currentProduct);
      },err=>{
console.log("error "+err);
      }
    )
    console.log(this.url);

    //console.log(this.activetedRoute.snapshot.params.id)
  }

  public onUpdateProduct(value:any){

this.catService.updateRessource(this.url,value).subscribe(
  data=>{
    alert("mise a jour effectuer avec success")
console.log(data);
this.router.navigateByUrl('/products');
  },
  err=>{
    console.log(err);
  }
)
  }

}
