import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arwu-listing',
  templateUrl: './arwuranking.page.html',
  styleUrls: [
    './styles/arwuranking.page.scss',
    './styles/arwuranking.shell.scss'
  ]
})
export class QsListingPage implements OnInit {
  items: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.items = routeData['data'].items;
    });
  }
}
