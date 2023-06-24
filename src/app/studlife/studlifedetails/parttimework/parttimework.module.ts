import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';

import { ParttimeworkPage } from './parttimework.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: ParttimeworkPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ ParttimeworkPage ]
})
export class ParttimeworkPageModule {}
