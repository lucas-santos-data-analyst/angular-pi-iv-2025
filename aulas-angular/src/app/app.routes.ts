import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'livros',
        loadChildren: () => import('./livros/livros-module').then(m =>m.LivrosModule)
    },
    {
        path:'contador',
        loadChildren: ()=> import('./contador/contador-module').then(m => m.ContadorModule)
    }
];
