import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSwiper } from "@ionic/angular";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination, IonicSwiper]);

@Component({
  selector: 'app-coopprogram-details',
  templateUrl: './coopprogram-details.page.html',
  styleUrls: [
    './styles/coopprogram-details.page.scss',
    './styles/coopprogram-details.shell.scss'
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
