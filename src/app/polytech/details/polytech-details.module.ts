import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { PolytechService } from '../polytech.service';
import { PolytechDetailsPage } from './polytech-details.page';
import { PolytechDetailsResolver } from './polytech-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: PolytechDetailsPage,
    resolve: {
      data: PolytechDetailsResolver
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
    PolytechDetailsPage
  ],
  providers: [
    PolytechDetailsResolver,
    PolytechService
  ]
})
export class PolytechDetailsPageModule {}
