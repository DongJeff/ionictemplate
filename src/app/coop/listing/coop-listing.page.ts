import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coop-listing',
  templateUrl: './coop-listing.page.html',
  styleUrls: [
    './styles/coop-listing.page.scss',
    './styles/coop-listing.shell.scss',
    './styles/coop-listing.ios.scss'
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
