import { ResultService } from 'src/app/services/result.service';
import { Pessoa } from '../../Models/pessoa';
import { Component, OnInit } from '@angular/core';
import { pessoaSignoRetorno } from 'src/app/Models/pessoaSignoRetorno';


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

  pessoaSignoRetorno: pessoaSignoRetorno = {
    nomePessoa: '',
    nomeSigno: '',
    caracteristicas: '',
    imagem: ''
  }

  nasc: any = 0;
  result!: any;
  indice: number = 0;
  isVisible: boolean =  false;

  constructor(private service: ResultService) { }

  ngOnInit(): void { }

  send() {

    if (this.pessoa.nome == '' || this.nasc == 0) {
      alert('favor preencher o nome e data de nascimento');
      return false;
    }

    this.indice = this.checkDate(this.nasc);

    this.service.buscarPorId(this.indice).subscribe((listar) => {
      this.result = listar
      console.log(this.result)
      this.returnResult(this.result, this.pessoa.nome);
      this.isVisible = true;
    });
    return true;
  }

  checkDate(nasc: any): number {

    let day = '0' + this.nasc['day'].toString();
    console.log(day + ' dia');
    let timeString = this.nasc['month'].toString() + day.toString();
    let time = parseInt(timeString);
    console.log(time.toString());

    if (time >= 121 && time <= 218) {
      console.log(time);
      return 1;
    }
    if (time >= 219 && time <= 320) {
      console.log(time);
      return 2;
    }
    if (time >= 321 && time <= 420) {
      console.log(time);
      return 3;
    }
    if (time >= 421 && time <= 520) {
      console.log(time);
      return 4;
    }
    if (time >= 521 && time <= 620) {
      console.log(time);
      return 5;
    }
    if (time >= 621 && time <= 722) {
      console.log(time);
      return 6;
    }
    if (time >= 723 && time <= 822) {
      console.log(time);
      return 7;
    }
    if (time >= 822 && time <= 922) {
      console.log(time);
      return 8;
    }
    if (time >= 923 && time <= 1021) {
      console.log(time);
      return 9;
    }
    if (time >= 1023 && time <= 1121) {
      console.log(time);
      return 10;
    }
    if (time >= 1122 && time <= 1221) {
      console.log(time);
      return 11;
    }
    if (time >= 1222 && time <= 120) {
      console.log(time);
      return 12;
    }
    return 0;
  }

  returnResult(result: any, pessoaNome: string) {

    this.pessoaSignoRetorno.nomePessoa = pessoaNome,
    this.pessoaSignoRetorno.nomeSigno = result.nomeSigno,
    this.pessoaSignoRetorno.caracteristicas = result.caracteristicas,
      this.pessoaSignoRetorno.imagem = result.urlImage

    console.log(this.pessoaSignoRetorno)

    return this.pessoaSignoRetorno;

  }
}
