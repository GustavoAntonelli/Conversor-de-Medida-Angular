import { Component, OnInit, ViewChild } from '@angular/core';
import { ConversorService, MedidaService } from '../services';
import { Conversao, Medida } from '../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor-de-medida',
  templateUrl: './conversor-de-medida.component.html',
  styleUrls: ['./conversor-de-medida.component.css']
})
export class ConversorDeMedidaComponent implements OnInit {

  medidas: Medida[];
  conversao: Conversao = new Conversao('m', 'mm', 1)

  // @ViewChild("conversaoForm", {static: true})conversaoForm: NgForm;
  
  constructor(private medidaService: MedidaService, private conversaoService: ConversorService) { }

  ngOnInit(): void {
    this.medidas = this.medidaService.listarTodos();
  }

  converter(): string{
    // if(this.conversaoForm.form.valid){
     return this.conversaoService.converter(this.conversao);
    // }
  }

}
