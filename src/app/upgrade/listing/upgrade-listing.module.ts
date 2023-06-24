import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { UpgradeService } from '../upgrade.service';
import { UpgradeListingPage } from './upgrade-listing.page';
import { UpgradeListingResolver } from './upgrade-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: UpgradeListingPage,
    resolve: {
      data: UpgradeListingResolver
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
    UpgradeListingPage
  ],
  providers: [
    UpgradeListingResolver,
    UpgradeService
  ]
})
export class UpgradeListingPageModule {}
