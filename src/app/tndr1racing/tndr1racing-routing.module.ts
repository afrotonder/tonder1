import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tndr1racingPage } from './tndr1racing.page';

const routes: Routes = [
  {
    path: '',
    component: Tndr1racingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tndr1racingPageRoutingModule {}
