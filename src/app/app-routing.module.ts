import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '**',
    redirectTo: '/tabs/about',
    pathMatch: 'full'
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tndr1racing',
    loadChildren: () => import('./tndr1racing/tndr1racing.module').then( m => m.Tndr1racingPageModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then( m => m.YoutubePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {}
