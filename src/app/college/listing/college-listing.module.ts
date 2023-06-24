import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';

import { CollegeService } from '../college.service';
import { CollegeListingPage } from './college-listing.page';
import { CollegeListingResolver } from './college-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: CollegeListingPage,
    resolve: {
      data: CollegeListingResolver
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
    CollegeListingPage
  ],
  providers: [
    CollegeListingResolver,
    CollegeService
  ]
})
export class CollegeListingPageModule {}
