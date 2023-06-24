import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';

import { BankaccountPage } from './bankaccount.page';

const categoriesRoutes: Routes = [
  {
    path: '',
    component: BankaccountPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [ BankaccountPage ]
})
export class BankaccountPageModule {}
