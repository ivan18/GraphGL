import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Graph } from '../../models/graph';
import { GraphDetailsPage } from '../graph-details/graph-details';

/*
  Generated class for the GraphListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/graph-list/graph-list.html',
})
export class GraphListPage {
  selectedItem: any;
  icons: string[];
  items: Array<Graph>;

  constructor(private nav: NavController) {

  }
  itemShow(event, item) {
    this.nav.push(GraphDetailsPage, {
      item: item
    });
  }

}
