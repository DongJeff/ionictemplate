import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uni-listing',
  templateUrl: './uni-listing.page.html',
  styleUrls: [
    './styles/uni-listing.page.scss',
    './styles/uni-listing.shell.scss',
    './styles/uni-listing.ios.scss'
  ]
})
export class UniListingPage implements OnInit {
  items: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.items = routeData['data'].items;
    });
  }
}
