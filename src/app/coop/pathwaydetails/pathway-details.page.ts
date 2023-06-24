import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSwiper } from "@ionic/angular";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination, IonicSwiper]);

@Component({
  selector: 'app-pathway-details',
  templateUrl: './pathway-details.page.html',
  styleUrls: [
    './styles/pathway-details.page.scss',
    './styles/pathway-details.shell.scss'
  ]
})
export class CoopDetailsPage implements OnInit {

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
