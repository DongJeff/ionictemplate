import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { CoopService } from '../cooptransfer.service';
import { CoopListingPage } from './transfer-listing.page';
import { CoopListingResolver } from './transfer-listing.resolver';

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
