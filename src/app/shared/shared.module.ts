import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../safe.pipe';
import { MainCardComponent } from '../components/main-card/main-card.component';
import { IonicModule } from '@ionic/angular';
import { MobileMenuComponent } from '../components/mobile-menu/mobile-menu.component';
import { TopMenuComponent } from '../components/top-menu/top-menu.component';
@NgModule({
  declarations: [SafePipe, MainCardComponent, TopMenuComponent, MobileMenuComponent],
  imports: [CommonModule],
  exports: [SafePipe, MainCardComponent, TopMenuComponent, MobileMenuComponent, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class SharedModule {}
