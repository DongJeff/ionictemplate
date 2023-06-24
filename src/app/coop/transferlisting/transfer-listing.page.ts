import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfer-listing',
  templateUrl: './transfer-listing.page.html',
  styleUrls: [
    './styles/transfer-listing.page.scss',
    './styles/transfer-listing.shell.scss',
    './styles/transfer-listing.ios.scss'
  ]
})
export class CoopListingPage implements OnInit {
  items: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.items = routeData['data'].items;
    });
  }
}
