import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from "../users/users";
import {BuyoutPage} from "../buyout/buyout";
import {ShopPage} from "../shop/shop";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navToUsersPage() {
    this.navCtrl.push(UsersPage);
  }

  navToShopPage() {
    this.navCtrl.push(ShopPage);

  }


}
