import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  imports: [],
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {

  nome = 'Lucas';

  caminhoImagem = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Folhardigital.com.br%2F2023%2F07%2F20%2Finternet-e-redes-sociais%2Fgoogle-celebra-18-anos-de-presenca-no-brasil%2F&psig=AOvVaw3RipXMZNLHH0DFOxZZAkmh&ust=1755903953922000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOi0zI2CnY8DFQAAAAAdAAAAABAL'

  msg=''

  dizerOi() {
    this.msg = 'Olá mundooo!!!'
  }
}
