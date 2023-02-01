import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';

export const routes: Routes = [
  { path:'', loadChildren: () => import('./modules/home/home/home.module').then(m => m.HomeModule)},
  { path:'login', loadChildren: () => import('./modules/login/login/login.module').then(m => m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
