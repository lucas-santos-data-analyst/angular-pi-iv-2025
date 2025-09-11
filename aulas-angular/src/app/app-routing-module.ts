import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ToolbarApp } from './toolbar-app/toolbar-app';


const routes: Routes = [
  {
    path:'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
  },
  {
    path:'contador',
    loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
  },
  {
    path: 'angularMaterial',
    loadChildren: ()=> import('./angular-material/angular-material-module').then(m => m.AngularMaterialModule)
  },
  {
    path: 'dados',
    loadChildren: ()=> import('./dados/dados-module').then(m => m.DadosModule)
  },
  {
      path:'toolbar-app' , component: ToolbarApp
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MatToolbarModule,MatIconModule,MatButtonModule]
})
export class AppRoutingModule { }
