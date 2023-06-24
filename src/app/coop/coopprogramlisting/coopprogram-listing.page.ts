import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coopprogram-listing',
  templateUrl: './coopprogram-listing.page.html',
  styleUrls: [
    './styles/coopprogram-listing.page.scss',
    './styles/coopprogram-listing.shell.scss',
    './styles/coopprogram-listing.ios.scss'
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
