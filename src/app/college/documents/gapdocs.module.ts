import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';

import { GapdocsPage } from './gapdocs.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: GapdocsPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ GapdocsPage ]
})
export class GapdocsPageModule {}
