import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';

import { CollegemenuPage } from './collegemenu';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: CollegemenuPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ CollegemenuPage ]
})
export class CollegemenuPageModule {}
