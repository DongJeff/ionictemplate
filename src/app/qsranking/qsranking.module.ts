import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';

import { QsService } from './qsranking.service';
import { QsListingPage } from './qsranking.page';
import { QsListingResolver } from './qsranking.resolver';

const routes: Routes = [
  {
    path: '',
    component: QsListingPage,
    resolve: {
      data: QsListingResolver
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
    QsListingPage
  ],
  providers: [
    QsListingResolver,
    QsService
  ]
})
export class QsListingPageModule {}
