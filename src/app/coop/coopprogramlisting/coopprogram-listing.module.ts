import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { CoopService } from '../coopprogram.service';
import { CoopListingPage } from './coopprogram-listing.page';
import { CoopListingResolver } from './coopprogram-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: CoopListingPage,
    resolve: {
      data: CoopListingResolver
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
    CoopListingPage
  ],
  providers: [
    CoopListingResolver,
    CoopService
  ]
})
export class CoopListingPageModule {}
