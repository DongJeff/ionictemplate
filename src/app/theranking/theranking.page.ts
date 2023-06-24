import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-the-listing',
  templateUrl: './theranking.page.html',
  styleUrls: [
    './styles/theranking.page.scss',
    './styles/theranking.shell.scss'
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
