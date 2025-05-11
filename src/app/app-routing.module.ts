import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./tab4/comment/comment.module').then(m => m.CommentPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./tab5/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'MyFavorite',
    loadChildren: () => import('./tab5/my-favorite/my-favorite.module').then( m => m.MyFavoritePageModule)
  },
  {
    path: 'MyStar',
    loadChildren: () => import('./tab5/my-star/my-star.module').then( m => m.MyStarPageModule)
  },
  {
    path: 'ContractUs',
    loadChildren: () => import('./tab5/contract-us/contract-us.module').then( m => m.ContractUsPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./tab5/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./tab5/login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
