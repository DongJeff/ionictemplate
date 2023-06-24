import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSwiper } from "@ionic/angular";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination, IonicSwiper]);

@Component({
  selector: 'app-upgrade-details',
  templateUrl: './upgrade-details.page.html',
  styleUrls: [
    './styles/upgrade-details.page.scss',
    './styles/upgrade-details.shell.scss'
  ]
})
export class UpgradeDetailsPage implements OnInit {

  details: any;
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zooming on slide images
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      this.details = routeData['data'];
    });
  }
}
