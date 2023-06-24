import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upgrade-listing',
  templateUrl: './upgrade-listing.page.html',
  styleUrls: [
    './styles/upgrade-listing.page.scss',
    './styles/upgrade-listing.shell.scss',
    './styles/upgrade-listing.ios.scss'
  ]
})
export class UpgradeListingPage implements OnInit {
  items: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.items = routeData['data'].items;
    });
  }
}
