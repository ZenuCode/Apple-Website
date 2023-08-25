import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/home/homepage/homepage.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'header', component: HeaderComponent},
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'mac', loadChildren: () => import('./features/mac/mac.module').then(m => m.MacModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
