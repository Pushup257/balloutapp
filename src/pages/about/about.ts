import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataManagerProvider } from '../../providers/data-manager/data-manager'
//import {Observer} from 'rxsj/Observer'
/**
 * Generated class for the ParkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  //gamesListObs: Observer <any>
  gameObj = {
    "name": "",
    "location": "",
    "time": "",
    "sport_type": "",
    "duration": "",
    "intensity_level": "",
    "player_count": ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataManager: DataManagerProvider) {
  }

  sendGameData() {
    console.log('lol we are sending this object', this.gameObj);
    this.dataManager.sendGame(this.gameObj);
  }
  getGamesGet() {
    //his.gamesListObs = this.dataManager.getGames()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}

