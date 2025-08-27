import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  imports: [],
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {

  valor = 0

  somar(){
    this.valor +=1
  }
  subtrair(){
    this.valor -=1
  }
}
