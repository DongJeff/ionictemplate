import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';

import { SecondarysystemPage } from './secondarysystem.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: SecondarysystemPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ SecondarysystemPage ]
})
export class SecondarysystemPageModule {}
