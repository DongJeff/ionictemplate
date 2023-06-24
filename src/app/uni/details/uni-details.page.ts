import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSwiper } from "@ionic/angular";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination, IonicSwiper]);

@Component({
  selector: 'app-uni-details',
  templateUrl: './uni-details.page.html',
  styleUrls: [
    './styles/uni-details.page.scss',
    './styles/uni-details.shell.scss'
  ]
})
export class UniDetailsPage implements OnInit {

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
