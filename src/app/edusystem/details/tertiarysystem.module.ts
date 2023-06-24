import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';

import { TertiarysystemPage } from './tertiarysystem.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: TertiarysystemPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ TertiarysystemPage ]
})
export class TertiarysystemPageModule {}
