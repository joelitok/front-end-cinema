import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/model.products';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

public currentProduct:Product={id:0, designation:'',price:0,quantite:0};
public mode:number=1;

constructor( public calogueService:CatalogueService,public router:Router) { }

  ngOnInit(): void {
  }

onSaveProduct(data:Product){
this.calogueService.saveRessource(this.calogueService.host+"/products",data).subscribe(
  res=>{
    //this.router.navigateByUrl("/products");
    //console.log(res);
    this.currentProduct=data;
    this.mode=2;
  },err=>{
    console.log(err);
  }
)

  }

  newProduct(){
    this.mode=1;
  }


}
