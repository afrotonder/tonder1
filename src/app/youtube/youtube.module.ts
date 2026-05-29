import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoutubePageRoutingModule } from './youtube-routing.module';

import { YoutubePage } from './youtube.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoutubePageRoutingModule,
    SharedModule
  ],
  declarations: [YoutubePage]
})
export class YoutubePageModule {}
