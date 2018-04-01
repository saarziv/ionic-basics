import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit{
   name:string;

  constructor(public navParams:NavParams,public navCtrl:NavController) {
  }

  ngOnInit() {
    this.name = this.navParams.get("userName");
  }

  backToRoot() {
    this.navCtrl.popToRoot(); //pops to the beginning.
    // this.navCtrl.pop() will take me back one page in the stack..
  }



}
