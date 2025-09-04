import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiTests } from './ui-tests/ui-tests';

const routes: Routes = [
  {
    path:'uitest' , component:UiTests
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMaterialRoutingModule { }
