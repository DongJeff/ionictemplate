import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';

import { QsService } from './theranking.service';
import { QsListingPage } from './theranking.page';
import { QsListingResolver } from './theranking.resolver';

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
