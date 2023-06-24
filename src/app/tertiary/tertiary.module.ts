import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { TertiaryPage } from './tertiary.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: TertiaryPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ TertiaryPage ]
})
export class TertiaryPageModule {}
