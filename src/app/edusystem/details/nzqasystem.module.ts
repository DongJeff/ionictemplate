import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';

import { NzqasystemPage } from './nzqasystem.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: NzqasystemPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ NzqasystemPage ]
})
export class NzqasystemPageModule {}
