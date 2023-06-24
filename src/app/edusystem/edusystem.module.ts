import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { EdusystemPage } from './edusystem.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: EdusystemPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ EdusystemPage ]
})
export class EdusystemPageModule {}
