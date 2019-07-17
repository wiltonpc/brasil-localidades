import { EstadosService } from './../estados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  estados: Array<any>;
  constructor(private estadosService: EstadosService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.estadosService.listar().subscribe(dados => this.estados = dados);
  }
}
