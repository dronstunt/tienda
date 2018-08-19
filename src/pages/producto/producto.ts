import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoService } from "../../providers/carrito";


@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  producto:any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs:CarritoService ) {

    console.log( this.navParams.get("producto") );
    this.producto = this.navParams.get("producto");
    
    this.getProductos();
  
  }

  getProductos() {
    this.producto.getProductos()
    .then(data => {
      this.producto = data;
      console.log(this.producto);
    });
   
  

}
