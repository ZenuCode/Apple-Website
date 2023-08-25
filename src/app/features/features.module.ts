import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { MacModule } from './mac/mac.module';
import { StoreModule } from './store/store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    MacModule,
    StoreModule,
  ]
})
export class FeaturesModule { }
