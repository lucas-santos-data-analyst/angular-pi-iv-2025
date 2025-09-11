import { Component } from '@angular/core';
import { produto } from '../modelo/produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {

  displayedColumns: String[] = ['nome', 'valor', 'acao'];

  dataSource: produto[] = [
   {nome:'coca-cola',     valor:10},
   {nome:'fanta',         valor:7},
   {nome:'ze da manga',   valor:300}

]


}
