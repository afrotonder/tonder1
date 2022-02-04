import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '**',
    redirectTo: '/tabs/about',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), SwiperModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {}
