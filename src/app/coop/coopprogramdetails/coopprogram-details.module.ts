import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwiperModule } from 'swiper/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { CoopService } from '../coopprogram.service';
import { CoopDetailsPage } from './coopprogram-details.page';
import { CoopDetailsResolver } from './coopprogram-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: CoopDetailsPage,
    resolve: {
      data: CoopDetailsResolver
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
    CoopDetailsPage
  ],
  providers: [
    CoopDetailsResolver,
    CoopService
  ]
})
export class CoopDetailsPageModule {}
