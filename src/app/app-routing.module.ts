import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'question-list',
    loadChildren: () => import('./pages/question-list/question-list.module').then(m => m.QuestionListPageModule)
  },
  {
    path: 'place-details',
    loadChildren: () => import('./pages/place-details/place-details.module').then(m => m.PlaceDetailsPageModule)
  },
  {
    path: 'add-place',
    loadChildren: () => import('./pages/add-place/add-place.module').then(m => m.AddPlacePageModule)
  }
  ,
  {
    path: 'place-point',
    loadChildren: () => import('./pages/set-place-point/set-place-point.module').then(m => m.SetPlacePointPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
