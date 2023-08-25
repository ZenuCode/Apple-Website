import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StoreComponent } from './pages/store/store.component';
import { MacComponent } from './pages/mac/mac.component';



@NgModule({
  declarations: [
    HomepageComponent,
    StoreComponent,
    MacComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
