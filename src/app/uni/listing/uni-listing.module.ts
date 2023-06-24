import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { UniService } from '../uni.service';
import { UniListingPage } from './uni-listing.page';
import { UniListingResolver } from './uni-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: UniListingPage,
    resolve: {
      data: UniListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    UniListingPage
  ],
  providers: [
    UniListingResolver,
    UniService
  ]
})
export class UniListingPageModule {}
