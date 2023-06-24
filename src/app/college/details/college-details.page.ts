import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.page.html',
  styleUrls: [
    './styles/college-details.page.scss',
    './styles/college-details.shell.scss'
  ]
})
export class CollegeDetailsPage implements OnInit {
  details: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.details = routeData['data'];
    });
  }
}
