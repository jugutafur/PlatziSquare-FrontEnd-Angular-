import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LLearnComponent } from './layout/l-learn/l-learn.component';
import { LPlatziSquareComponent } from './layout/l-platzi-square/l-platzi-square.component';
// import {} from '';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Estudiar',
    pathMatch: 'full'
  },
  {
    path: 'Estudiar',
    component: LLearnComponent,
    loadChildren: () => import('./core/components/learn/learn.module').then(m=> m.LearnModule)
  },
  {
    path: 'Platzi',
    component: LPlatziSquareComponent,
    loadChildren: () => import('./core/components/PlatziSquare/platziSquare.module').then(m=> m.PlatziSquareModule)
  },
  // { 
  //   path: '**', 
  //   component: PageNotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
