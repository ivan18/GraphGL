import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Graph } from '../../models/graph';

/*
  Generated class for the GraphDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/graph-details/graph-details.html',
})
export class GraphDetailsPage {
  selectedItem: Graph;

  constructor(private nav: NavController, navParams: NavParams) {
    console.log('GraphDetailsPage','costructor','start');
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    console.log('GraphDetailsPage','selectedItem',this.selectedItem);

  }

}
