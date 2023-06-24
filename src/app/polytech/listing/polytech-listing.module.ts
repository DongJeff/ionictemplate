import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { PolytechService } from '../polytech.service';
import { PolytechListingPage } from './polytech-listing.page';
import { PolytechListingResolver } from './polytech-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: PolytechListingPage,
    resolve: {
      data: PolytechListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [
    PolytechListingPage
  ],
  providers: [
    PolytechListingResolver,
    PolytechService
  ]
})
export class PolytechListingPageModule {}
