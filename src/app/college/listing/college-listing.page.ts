import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-college-listing',
  templateUrl: './college-listing.page.html',
  styleUrls: [
    './styles/college-listing.page.scss',
    './styles/college-listing.shell.scss'
  ]
})
export class CollegeListingPage implements OnInit {
  items: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.items = routeData['data'].items;
    });
  }
}
