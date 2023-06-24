import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';

import { WorkvisaPage } from './workvisa.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: WorkvisaPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ WorkvisaPage ]
})
export class WorkvisaPageModule {}
