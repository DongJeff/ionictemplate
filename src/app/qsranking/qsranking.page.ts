import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qs-listing',
  templateUrl: './qsranking.page.html',
  styleUrls: [
    './styles/qsranking.page.scss',
    './styles/qsranking.shell.scss'
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
