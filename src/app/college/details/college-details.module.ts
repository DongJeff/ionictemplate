import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { CollegeService } from '../college.service';
import { CollegeDetailsPage } from './college-details.page';
import { CollegeDetailsResolver } from './college-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: CollegeDetailsPage,
    resolve: {
      data: CollegeDetailsResolver
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
    CollegeDetailsPage
  ],
  providers: [
    CollegeDetailsResolver,
    CollegeService
  ]
})
export class CollegeDetailsPageModule {}
