import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pathway-listing',
  templateUrl: './pathway-listing.page.html',
  styleUrls: [
    './styles/pathway-listing.page.scss',
    './styles/pathway-listing.shell.scss',
    './styles/pathway-listing.ios.scss'
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
