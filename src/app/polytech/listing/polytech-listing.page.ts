import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-polytech-listing',
  templateUrl: './polytech-listing.page.html',
  styleUrls: [
    './styles/polytech-listing.page.scss',
    './styles/polytech-listing.shell.scss'
  ]
})
export class PolytechListingPage implements OnInit {
  items: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.items = routeData['data'].items;
    });
  }
}
