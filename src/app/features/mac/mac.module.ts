import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacMainComponent } from './mac-main/mac-main.component';
import { MacRoutingModule } from './mac-routing.module';



@NgModule({
  declarations: [
    MacMainComponent
  ],
  imports: [
    CommonModule,
    MacRoutingModule,
  ]
})
export class MacModule { }
