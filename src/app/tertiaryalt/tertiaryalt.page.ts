import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tertiaryalt',
  templateUrl: './tertiaryalt.page.html',
  styleUrls: [
    './styles/tertiaryalt.page.scss',
    './styles/tertiaryalt.shell.scss'
  ]
})
export class TertiaryaltPage implements OnInit {
  items: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.items = routeData['data'].items;
    });
  }
}
