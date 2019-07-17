import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(`${this.estados}`);
  }
}
