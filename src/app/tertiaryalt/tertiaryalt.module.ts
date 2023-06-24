import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from './../components/components.module';

import { TertiaryaltPage } from './tertiaryalt.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: TertiaryaltPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ TertiaryaltPage ]
})
export class TertiaryaltPageModule {}