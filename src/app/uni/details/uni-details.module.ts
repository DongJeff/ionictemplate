import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwiperModule } from 'swiper/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { UniService } from '../uni.service';
import { UniDetailsPage } from './uni-details.page';
import { UniDetailsResolver } from './uni-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: UniDetailsPage,
    resolve: {
      data: UniDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule,
    SwiperModule
  ],
  declarations: [
    UniDetailsPage
  ],
  providers: [
    UniDetailsResolver,
    UniService
  ]
})
export class UniDetailsPageModule {}
