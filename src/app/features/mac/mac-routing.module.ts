import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacMainComponent } from './mac-main/mac-main.component';


const routes: Routes = [
    { path: '', redirectTo: 'mac-main', pathMatch: 'full'},
    { path: 'mac-main', component: MacMainComponent }
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MacRoutingModule { }