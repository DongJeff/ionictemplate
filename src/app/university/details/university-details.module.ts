import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwiperModule } from 'swiper/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { UpgradeService } from '../university.service';
import { UpgradeDetailsPage } from './university-details.page';
import { UpgradeDetailsResolver } from './university-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: UpgradeDetailsPage,
    resolve: {
      data: UpgradeDetailsResolver
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
    UpgradeDetailsPage
  ],
  providers: [
    UpgradeDetailsResolver,
    UpgradeService
  ]
})
export class UpgradeDetailsPageModule {}
