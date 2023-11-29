import { Pessoa } from '../../Models/pessoa';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pessoa: Pessoa = {
    id: 0,
    nome: '',
    nascimento: ''
  }

  constructor() { }

  ngOnInit(): void {

  }

  send() {
    alert(this.pessoa.nome);
  }
}
