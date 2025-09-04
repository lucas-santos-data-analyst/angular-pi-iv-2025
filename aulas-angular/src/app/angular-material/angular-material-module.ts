import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialRoutingModule } from './angular-material-routing-module';
import { UiTests } from './ui-tests/ui-tests';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    UiTests
  ],
  imports: [
    CommonModule,
    AngularMaterialRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
