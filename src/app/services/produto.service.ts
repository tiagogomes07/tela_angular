import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';

const API = "";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  http: HttpClient;
  constructor(http: HttpClient) { 

  }

  listaProdutos(){
    return this.http
    .get<Produto[]>(API);
  }

}
