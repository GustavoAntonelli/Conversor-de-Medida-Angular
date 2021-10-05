import { Injectable } from '@angular/core';
import { Medida } from '../models';

@Injectable()
export class MedidaService {

  private comprimento: Medida[];

  constructor() { }

  private comprimentoObj: Medida[] =[
    { "sigla": "MM", "descricao": "Milimetro" },
    { "sigla": "CM", "descricao": "Centimetro" },
    { "sigla": "M", "descricao": "Metro" }
  ]

  listarTodos(): Medida[]{
    // if(this.comprimento){
    //   return this.comprimento;
    // }

    return this.comprimentoObj

    // this.comprimento = [];

    // for(let comprimentoObj of this.comprimentoObj){
    //   let medida: Medida = new Medida()
    //   Object.assign(medida, comprimentoObj);
    //   this.comprimento.push(medida)
    // }

    // return this.comprimento;
  }

}
