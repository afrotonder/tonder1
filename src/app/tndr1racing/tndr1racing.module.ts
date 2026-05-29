import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tndr1racingPageRoutingModule } from './tndr1racing-routing.module';

import { Tndr1racingPage } from './tndr1racing.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tndr1racingPageRoutingModule,
    SharedModule
  ],
  declarations: [Tndr1racingPage]
})
export class Tndr1racingPageModule {}
