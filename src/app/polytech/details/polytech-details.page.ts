import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-polytech-details',
  templateUrl: './polytech-details.page.html',
  styleUrls: [
    './styles/polytech-details.page.scss',
    './styles/polytech-details.shell.scss'
  ]
})
export class PolytechDetailsPage implements OnInit {
  details: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.details = routeData['data'];
    });
  }
}
