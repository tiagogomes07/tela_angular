import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto_Cosif } from '../models/Produto_Cosif';

const API = "";

@Injectable({
  providedIn: 'root'
})
export class ProdutoCosifService {

  http: HttpClient;
  constructor(http: HttpClient) { 

  }

  listaProdutosCosif(){
    return this.http
    .get<Produto_Cosif[]>(API);
  }

}
