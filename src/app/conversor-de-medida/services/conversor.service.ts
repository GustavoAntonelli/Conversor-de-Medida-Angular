import { Injectable } from '@angular/core';
import { Conversao } from '../models';
import * as convert_units from 'convert-units'

@Injectable()
export class ConversorService {

  conversao: Conversao[] = []

  constructor() { }

  converter(valor: Conversao): string{
    return convert_units(valor.valor).from(valor.medidaDe).to(valor.medidaPara);
  }
}
